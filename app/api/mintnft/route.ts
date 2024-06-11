import { ThirdwebStorage } from "@thirdweb-dev/storage";
import fs from "fs";
import { Engine } from "@thirdweb-dev/engine";
import { NFT_CONTRACT_ADDRESS } from "@/walletAddress";


// // Convert Next.js Request to Node.js IncomingMessage
// function convertNextRequestToIncomingMessage(
//   req: NextApiRequest
// ): IncomingMessage {
//   const readable = new Readable();
//   readable._read = () => {};
//   readable.push(req.body);
//   readable.push(null);
//   Object.assign(readable, req);
//   return readable as unknown as IncomingMessage;
// }

// async function handleMintNFTRequest(req: NextApiRequest, res: NextApiResponse) {
//   const request = convertNextRequestToIncomingMessage(req);
//   const form = new IncomingForm();

//   return new Promise((resolve, reject) => {
//     form.parse(request, async (err, fields, files) => {
//       if (err) {
//         resolve(res.status(500).json({ error: err.message }));
//         return reject(err);
//       }

//       const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
//       const description = Array.isArray(fields.description)
//         ? fields.description[0]
//         : fields.description;
//       const address = Array.isArray(fields.address)
//         ? fields.address[0]
//         : fields.address;
//       const imageFile = files.imageFile
//         ? Array.isArray(files.imageFile)
//           ? files.imageFile[0]
//           : files.imageFile
//         : null;

//       if (!name || !description || !address || !imageFile) {
//         return resolve(
//           res.status(400).json({ error: "Missing required fields" })
//         );
//       }

//       const {
//         TW_ENGINE_URL,
//         TW_ACCESS_TOKEN,
//         TW_BACKEND_WALLET,
//         TW_SECRET_KEY,
//       } = process.env;

//       if (
//         !TW_ENGINE_URL ||
//         !TW_ACCESS_TOKEN ||
//         !TW_BACKEND_WALLET ||
//         !TW_SECRET_KEY
//       ) {
//         return resolve(
//           res.status(500).json({ error: "Missing environment variables" })
//         );
//       }

//       try {
//         const storage = new ThirdwebStorage({ secretKey: TW_SECRET_KEY });
//         const fileData = fs.readFileSync(imageFile.filepath);

//         const uri = await storage.upload(fileData);
//         const nftMetaData = {
//           name: name,
//           description: description,
//           image: uri,
//         };

//         const engine = new Engine({
//           url: TW_ENGINE_URL,
//           accessToken: TW_ACCESS_TOKEN,
//         });

//         const response = await engine.erc721.mintTo(
//           "ethereum",
//           NFT_CONTRACT_ADDRESS,
//           TW_BACKEND_WALLET,
//           {
//             receiver: address,
//             metadata: nftMetaData,
//           }
//         );

//         fs.unlinkSync(imageFile.filepath);

//         resolve(
//           res.status(200).json({
//             message: "NFT Minted Successfully",
//             data: response,
//           })
//         );
//       } catch (error: any) {
//         resolve(res.status(500).json({ error: error.message }));
//       }
//     });
//   });
// }

// export default handleMintNFTRequest;

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = formData.get("name");
  const description = formData.get("description");
  const imageFile = formData.get("imageFile");
  const address = formData.get("address");

  const response = await fetch(`https:google.com`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY!,
    },
    body: JSON.stringify({
      name,
      description,
      image: imageFile,
      address,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return Response.json({ data });
}
