import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req, file, cd) {
        cd(null, "./public/temp")
    },
    filename: function(req, file, cd) {
        //const uniqueSuffix = Data.now() + '-' + Math.round(Math.random() * 1E9)
        cd(null, file.originalname)
    }
})

export const upload = multer({
    storage,
})