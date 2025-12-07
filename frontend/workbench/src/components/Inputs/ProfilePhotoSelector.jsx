import React, { useRef, useState } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({ image, setImage, preview, setPreview }) => {

  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Update the image state
      setImage(file);

      // Generate preview URL from the file
      const preview = URL.createObjectURL(file);
      if(setPreview){
        setPreview(preview)
      }
      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
    if(setPreview){
      setPreview(null);
    }
};
  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex flex-col items-center mb-6">
      <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleImageChange}
          className="hidden"
      />

      {!image ? (
          <div 
            className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 rounded-full relative cursor-pointer border-2 border-dashed border-orange-300 hover:border-orange-500 hover:from-orange-100 hover:to-orange-200 transition-all duration-200 group"
            onClick={onChooseFile}
          >
            <div className="flex flex-col items-center">
              <LuUser className="text-3xl text-orange-500 group-hover:text-orange-600" />
              <LuUpload className="text-lg text-orange-400 group-hover:text-orange-600 mt-1" />
            </div>
          </div>
      ) : (
          <div className="relative group">
            <img
                src={preview || previewUrl}
                alt="profile photo"
                className="w-24 h-24 rounded-full object-cover border-2 border-orange-300 shadow-md"
            />
            <button
                type="button"
                className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-full shadow-lg transition-all duration-200"
                onClick={handleRemoveImage}
            >
              <LuTrash className="text-sm" />
            </button>
          </div>
      )}
      <p className="text-xs text-slate-500 mt-2">{image ? 'Click trash to change' : 'Click to upload photo'}</p>
    </div>
  );
};  
export default ProfilePhotoSelector;