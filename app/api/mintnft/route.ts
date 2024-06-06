import { Agent } from "https";
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

const agent = new Agent({
  rejectUnauthorized: false,
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method != "POST") {
    res.status(405).json({ error: "Method no allowed, please use POST" });
    return;
  }
  const form = new IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: err });
      return;
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
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const { TW_ENGINE_URL, TW_ACCESS_TOKEN, TW_BACKEND_WALLET, TW_SECRET_KEY } =
      process.env;

    if (
      !TW_ENGINE_URL ||
      !TW_ACCESS_TOKEN ||
      !TW_BACKEND_WALLET ||
      !TW_SECRET_KEY
    ) {
      res.status(500).json({ error: "Missing environment variables" });
      return;
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
      res
        .status(200)
        .json({ message: "NFT Minted Successfully", data: response });
      fs.unlinkSync(imageFile.filepath);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });
}
