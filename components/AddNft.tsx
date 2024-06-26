"use client";

import { ConnectWallet, MediaRenderer, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";
import { FaUpload, FaWallet } from "react-icons/fa";

const AddNftMinter = () => {
  const address = useAddress();
  const [mediaFile, setMediaFile] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | any | null>(null);
  const [nftName, setNftName] = useState<string>("");
  const [nftDescription, setNftDescription] = useState<string>("");
  const [mintingNft, setMintingNft] = useState<boolean>(false);

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setMediaFile(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleMediaChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      processFile(event.target.files[0]);
      setImageFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      setMintingNft(true);
      const formData = new FormData();
      formData.append("name", nftName);
      formData.append("description", nftDescription);
      formData.append("imageFile", imageFile);
      formData.append("address", address || "");

      console.log(formData);

      const response = await fetch("/api/mintnft", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      alert("NFT Minted Successfully!");
      setMintingNft(false);
      setMediaFile(null);
      setImageFile(null);
      setNftName("");
      setNftDescription("");
    }
  };

  return (
    <div className="w-full flex flex-col items-start justify-start space-y-6">
      <h1 className="font-bak text-xl text-center md:text-2xl lg:text-4xl font-normal text-primary">
        Mint Your NFT
      </h1>
      {address ? (
        <form
          className="w-full flex flex-col md:flex-row items-start justify-start md:justify-between gap-6"
          onSubmit={handleSubmit}
        >
          <div className="w-full md:flex-1">
            <label
              htmlFor="media-upload"
              className="flex flex-col items-center justify-center w-full h-[310px] p-5 border-2 gap-5 border-dashed border-gray-3 rounded-lg cursor-pointer text-gray-500 text-2xl font-medium text-center truncate"
            >
              {mediaFile ? (
                <div className="h-full w-full flex flex-col items-center justify-center">
                  <MediaRenderer src={mediaFile} height="100%" width="100%" />
                  <button className="w-fit text-sm text-primary">
                    Change Selected Image
                  </button>
                </div>
              ) : (
                <div className="w-full flex flex-col items-center justify-center  gap-5">
                  <FaUpload className="upload-icon" />
                  <span>Upload NFT Media</span>
                </div>
              )}
            </label>
            <input
              type="file"
              id="media-upload"
              accept="image/*"
              onChange={handleMediaChange}
              className="hidden"
              required
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
                placeholder="My NFT name"
                onChange={(e) => setNftName(e.target.value)}
                className="w-full border border-gray-100 bg-dark h-[50px] rounded outline-none focus:border-primary text-base font-normal text-white placeholder:text-gray-500 transition-all duration-300 px-4"
                required
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
                placeholder="The NFT is..."
                onChange={(e) => setNftDescription(e.target.value)}
                className="w-full border border-gray-100 bg-dark h-[50px] rounded outline-none focus:border-primary text-base font-normal text-white placeholder:text-gray-500 transition-all duration-300 resize-y px-4 pt-3"
                required
              />
            </div>
            <button
              type="submit"
              disabled={mintingNft}
              className={`w-full px-6 flex h-12 items-center justify-center gap-3 bg-primary rounded hover:opacity-80 disabled:cursor-not-allowed disabled:bg-primary/60 transition-all duration-300 text-white ${
                mintingNft ? "py-0" : "py-0"
              }`}
            >
              {mintingNft ? (
                <div className="flex items-center justify-center gap-2">
                  <span>Minting</span>
                  <Image
                    src="/icons/loading.svg"
                    alt="minting nft"
                    width={60}
                    height={60}
                  />
                </div>
              ) : (
                <div>
                  <span>Mint NFT</span>
                </div>
              )}
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center w-full">
          <div className="bg-dark p-6 rounded-lg shadow-lg text-center">
            <FaWallet className="text-5xl text-green-500 mb-4" />
            <h2 className="text-2xl font-semibold text-start mb-2">
              Connect Your Wallet
            </h2>
            <p className="text-gray-600 text-start md:text-center mb-6">
              To start minting your NFTs, please connect your wallet.
            </p>
            <ConnectWallet
              btnTitle="Connect Wallet"
              className="!w-fit !py-2 !px-6 !flex !items-center !justify-center !gap-3 !bg-primary !rounded hover:!opacity-80 !transition-all !duration-300"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNftMinter;
