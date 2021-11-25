import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crud-producto',
  templateUrl: './crud-producto.component.html',
  styleUrls: ['./crud-producto.component.css']
})
export class CrudProductoComponent implements OnInit {


  filtro : string ="";
  producto1 : Producto[] = [];

  producto : Producto = {
    idProducto:0,
    nombreProducto:"",
    cantidad: 0,
    preciounitario: 0,
    stock: 0
  }
  


  constructor(private productoservice: ProductoService) { 

  }

  ngOnInit(): void {
  }

  eliminar(aux:Producto){
    this.producto = aux
    
    this.productoservice.elimnar(aux.idProducto).subscribe( 
      resp=>{
      console.log(resp)
      
      var varFiltro:string = this.filtro ==""? "todos" : this.filtro;
    this.productoservice.consultaPC3(varFiltro).subscribe(
      response => this.producto1 = response
    );

    })
  }

  
  consulta(){
    console.log("===> consulta=>"+ this.filtro);
    var varFiltro:string = this.filtro ==""? "todos" : this.filtro;
    this.productoservice.consultaPC3(varFiltro).subscribe(
      response => this.producto1 = response
    );
  }
  registra(){
    console.log("===> consulta=>"+ this.producto.idProducto);
    
    this.productoservice.registra(this.producto).subscribe(
      response => {
          alert(response.mensaje);
          var varFiltro:string = this.filtro ==""? "todos" : this.filtro;
    this.productoservice.consultaPC3(varFiltro).subscribe(
      response => this.producto1 = response
    );
      }
    );
  }
  busca(aux:Producto){
    console.log("===> consulta=>"+ this.producto.idProducto);
    this.producto = aux;
    
      


  }
  actualiza(){
    console.log("===> consulta=>"+ this.producto.idProducto);


    
    this.productoservice.actualiza(this.producto).subscribe(
      response => {
          alert(response.mensaje);
          var varFiltro:string = this.filtro ==""? "todos" : this.filtro;
    this.productoservice.consultaPC3(varFiltro).subscribe(
      response => this.producto1 = response
    );
      }
    );
  }


}
