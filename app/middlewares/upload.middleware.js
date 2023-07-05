import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const uploadFiles = (req, res, next) => {    
    try {
        let foto = req.files.foto;
        let formatosPermitidos = ["jpeg", "png", "webp", "gif", "svg"];
        let extension = `${foto.mimetype.split("/")[1]}`;

        if (!formatosPermitidos.includes(extension)) {
            return res.status(400).json({
                code: 400,
                message: `Formato no permitido ${extension}, formatos permitidos(${formatosPermitidos.join(" - ")})`,
            });
        }
        let nombreFoto = `${Date.now()}-img.${extension}`;
        let pathDestino = path.join(
            __dirname,
            "/../../public/uploads",
            nombreFoto
        );

        foto.mv(pathDestino, async (error) => {
            if (error)
                return res
                    .status(500)
                    .json({ code: 500, message: "Error al subir la imagen en proceso de creación de producto." });
            req.nombreImagen = nombreFoto; //entregamos el nombre
            req.pathImagen = pathDestino; //entregamos en path
            next();
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({code: 500, message: "Error al procesar solicitud."})
    }
};

export default uploadFiles;