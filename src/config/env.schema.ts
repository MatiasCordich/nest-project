import * as Joi from 'joi'

// Al crar en envSchema lo que hago es darle una capa de seguridad a las variables de entorno con el proposito de que cada variable que necesitemes tienen que ser requeridas y de que tipo debe ser

export const envSchema = Joi.object({
    MONGO_URI: Joi.string().required()
})