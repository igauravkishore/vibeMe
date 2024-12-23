import {openUploadWidget} from "./Cloudinarservice";
// import {cloudinary_upload_preset} from "../../config";

const ImageUpload = ({setUrl,setName}) => {
    const uploadImageWidget = () => {
        let myUploadWidget = openUploadWidget(
            {
                cloudName: "dulyhh61p",
                uploadPreset: "gekfbn3n",
                sources: ["local"],
            },
            function (error, result) {
                if (!error && result.event === "success") {
                    console.log(result.info.secure_url)
                    setUrl(result.info.secure_url);
                    setName(result.info.original_filename);
                } else {
                    if (error) {
                        console.log(error);
                    }
                }
            }
        );
        myUploadWidget.open();
    };

    return (
        <button
            className="bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-black rounded-full p-3 font-semibold"
            onClick={uploadImageWidget}
        >
            Select Item
        </button>
    );
};

export default ImageUpload;