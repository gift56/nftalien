"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FaUpload } from "react-icons/fa";

const AddNftMinter = () => {
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [nftName, setNftName] = useState<string>("");
  const [nftDescription, setNftDescription] = useState<string>("");

  const handleMediaChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setMediaFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("NFT Name:", nftName);
    console.log("NFT Description:", nftDescription);
    console.log("Media File:", mediaFile);
  };

  return (
    <div className="w-full flex flex-col items-start justify-start space-y-6">
      <h1 className="font-bak text-xl text-center md:text-2xl lg:text-4xl font-normal text-primary">
        Mint Your NFT
      </h1>
      <form
        className="w-full flex flex-col md:flex-row items-start justify-start md:justify-between gap-6"
        onSubmit={handleSubmit}
      >
        <div className="w-full md:flex-1">
          <label
            htmlFor="media-upload"
            className="flex flex-col items-center justify-center w-full h-[310px] p-5 border-2 gap-5 border-dashed border-gray-3 rounded-lg cursor-pointer text-gray-500 text-2xl font-medium text-center"
          >
            <FaUpload className="upload-icon" />
            {mediaFile ? mediaFile.name : "Upload NFT Media"}
          </label>
          <input
            type="file"
            id="media-upload"
            accept="image/*,video/*,audio/*"
            onChange={handleMediaChange}
            className="hidden"
          />
        </div>
        <div className="w-full md:flex-1 flex flex-col gap-5 items-start justify-start">
          <h4 className="text-xl md:text-2xl font-medium text-white">
            NFT Metadata
          </h4>
          <div className="flex flex-col gap-3 items-start justify-start w-full">
            <label
              htmlFor="nft-name"
              className="text-base font-medium text-gray-300"
            >
              NFT Name
            </label>
            <input
              type="text"
              id="nft-name"
              value={nftName}
              onChange={(e) => setNftName(e.target.value)}
              className="w-full border border-gray-100 bg-dark h-[50px] rounded outline-none focus:border-primary text-base font-normal text-white placeholder:text-gray-500 transition-all duration-300"
            />
          </div>
          <div className="flex flex-col gap-3 items-start justify-start w-full">
            <label
              htmlFor="nft-description"
              className="text-base font-medium text-gray-300"
            >
              NFT Description
            </label>
            <textarea
              id="nft-description"
              value={nftDescription}
              onChange={(e) => setNftDescription(e.target.value)}
              className="w-full border border-gray-100 bg-dark h-[50px] rounded outline-none focus:border-primary text-base font-normal text-white placeholder:text-gray-500 transition-all duration-300 resize-y"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-6 flex items-center justify-center gap-3 bg-primary rounded hover:opacity-80 transition-all duration-300"
          >
            Mint NFT
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNftMinter;
