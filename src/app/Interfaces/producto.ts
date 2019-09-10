import { DecimalPipe } from '@angular/common';

export interface Producto{
    producto_id?: number,
    nombreProducto: string,
    precio: number,
    cantidad: number,
    created_at?: string,
    updated_at?: string,
    categoria_id: number,
    estado_id: number
}