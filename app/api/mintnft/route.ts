import type { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import fs from "fs";
import { Engine } from "@thirdweb-dev/engine";
import { NFT_CONTRACT_ADDRESS } from "@/walletAddress";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function POST(request: NextApiRequest) {
  const form = new IncomingForm();

  return new Promise((resolve, reject) => {
    form.parse(request, async (err, fields, files) => {
      if (err) {
        return resolve(Response.json({ error: err.message }, { status: 500 }));
      }

      const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
      const description = Array.isArray(fields.description)
        ? fields.description[0]
        : fields.description;
      const address = Array.isArray(fields.address)
        ? fields.address[0]
        : fields.address;
      const imageFile = files.imageFile
        ? Array.isArray(files.imageFile)
          ? files.imageFile[0]
          : files.imageFile
        : null;

      if (!name || !description || !address || !imageFile) {
        return resolve(
          Response.json({ error: "Missing required fields" }, { status: 400 })
        );
      }

      const {
        TW_ENGINE_URL,
        TW_ACCESS_TOKEN,
        TW_BACKEND_WALLET,
        TW_SECRET_KEY,
      } = process.env;

      if (
        !TW_ENGINE_URL ||
        !TW_ACCESS_TOKEN ||
        !TW_BACKEND_WALLET ||
        !TW_SECRET_KEY
      ) {
        return resolve(
          Response.json(
            { error: "Missing environment variables" },
            { status: 500 }
          )
        );
      }

      try {
        const storage = new ThirdwebStorage({ secretKey: TW_SECRET_KEY });
        const fileData = fs.readFileSync(imageFile.filepath);

        const uri = await storage.upload(fileData);
        const nftMetaData = {
          name: name,
          description: description,
          image: uri,
        };

        const engine = new Engine({
          url: TW_ENGINE_URL,
          accessToken: TW_ACCESS_TOKEN,
        });

        const response = await engine.erc721.mintTo(
          "ethereum",
          NFT_CONTRACT_ADDRESS,
          TW_BACKEND_WALLET,
          {
            receiver: address,
            metadata: nftMetaData,
          }
        );

        fs.unlinkSync(imageFile.filepath);

        resolve(
          Response.json(
            { message: "NFT Minted Successfully", data: response },
            { status: 200 }
          )
        );
      } catch (error: any) {
        resolve(Response.json({ error: error.message }, { status: 500 }));
      }
    });
  });
}
