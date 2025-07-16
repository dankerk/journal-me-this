"use client";
import { CldUploadWidget } from "next-cloudinary";

export const MediaUploadForm = () => {

  return (
    <div>
      <CldUploadWidget uploadPreset="Danny1">
        {({ open }) => {
          return <button onClick={() => open()}>Upload an Image</button>;
        }}
      </CldUploadWidget>
    </div>
  );
}
