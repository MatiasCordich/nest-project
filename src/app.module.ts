import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { configOptions } from './config/config.options';


@Module({
  imports: [

    // El modulo product donde va a estar toda nuestra logica de negocios para nuestro CRUD
    ProductModule,

    // Primero importamos en ConfigModule de nest/config y utilizamos el metodo forRoot() que va a recibir el configOptions que hemos creado

    ConfigModule.forRoot(configOptions),

    // Despues importamos el MongooseModule de nest/moongoose y utilizamos el forRootAsync() este va a recibir el sigiente objeto
    
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // imports: que es el ConfigModule de nest/connfig
      inject: [ConfigService], // inject: que es el ConfigService de nest/config

      // y por ultimo el useFactory que es una funcion asincorna que recibe como parametro el configService
      useFactory: async (configService: ConfigService) => {

        // Creamos la variable mognoConfig, el valor es el objeto que vamos a traer del configLoader con el .get() en este caso el objeto 'mongo'
        const mongoConfig = configService.get('mongo')

        // Del objeto mongo lo destructuro y accedo a su propiedad que es el 'uri' cuyo valor el la variable de entorno que contiene la URI para conectarse a la DB
        return{
          uri: mongoConfig.uri
        }
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
