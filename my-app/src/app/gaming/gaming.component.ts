import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrl: './gaming.component.scss'
})
export class GamingComponent {
  componente_placivideo_list:any[] = [];
  componente_procesoare_list:any[] = [];
  componente_placidebaza_list:any[] = [];
  componente_memorii_list:any[] = [];
  componente_ssd_list:any[] = [];
  componente_hdd_list:any[] = [];
  componente_surse_list:any[] = [];
  componente_carcase_list:any[] = [];
  componente_coolere_list:any[] = [];
  componente_ventilatoare_list:any[] = [];
  Produse: any[] = [];
  localProdus: any = {
    user:'',
    cantitate:'',
    id:'',
    link:'',
    titlu:'',
    descriere1:'',
    descriere2:'',
    descriere3:'',
    descriere4:'',
    pret:'',
  };
  key:any

  constructor(private productService: ProductService){
    this.componente_placivideo_list = this.productService.getcomponente_placivideo();
    this.componente_procesoare_list = this.productService.getcomponente_procesoare();
    this.componente_placidebaza_list = this.productService.getcomponente_placidebaza();
    this.componente_memorii_list = this.productService.getcomponente_memorii();
    this.componente_ssd_list = this.productService.getcomponente_ssd();
    this.componente_hdd_list = this.productService.getcomponente_hdd();
    this.componente_surse_list = this.productService.getcomponente_surse();
    this.componente_carcase_list = this.productService.getcomponente_carcase();
    this.componente_coolere_list = this.productService.getcomponente_coolere();
    this.componente_ventilatoare_list = this.productService.getcomponente_ventilatoare();
    if(localStorage.getItem('key'))
    {
      this.key = localStorage.getItem('key');
      this.key = this.key.slice(1, -1);
    }
  }

  ngOnInit(){
    const localDada = localStorage.getItem('cos')
      if(localDada != null) {
        this.Produse = JSON.parse(localDada);
      };
  }

  addCos(element:any){
    if(!localStorage.getItem('key'))
    {
      alert("Pentru a adauga ceva in cos trebe sa fi logat")
    }
    else
    {
      this.localProdus.user = localStorage.getItem('key');
      this.localProdus.user = this.localProdus.user.slice(1, -1);
      this.localProdus.cantitate = 1;
      this.localProdus.id = element.id;
      this.localProdus.link = element.link;
      this.localProdus.titlu = element.titlu;
      this.localProdus.descriere1 = element.descriere1;
      this.localProdus.descriere2 = element.descriere2;
      this.localProdus.descriere3 = element.descriere3;
      this.localProdus.descriere4 = element.descriere4;
      this.localProdus.pret = element.pret;
      for (let i = 0; i < this.Produse.length; i++)
      {
        if(this.Produse[i].id == this.localProdus.id && this.key == this.Produse[i].user)
        {
          this.Produse[i].cantitate = this.Produse[i].cantitate + 1;
          break
        }
        if (i == this.Produse.length - 1)
        {
          this.Produse.push(this.localProdus)
          break
        }
      }
      if (this.Produse.length == 0)
        this.Produse.push(this.localProdus)

      localStorage.setItem('cos',JSON.stringify(this.Produse))
      this.localProdus = {
        user:'',
        cantitate:'',
        id:'',
        link:'',
        titlu:'',
        descriere1:'',
        descriere2:'',
        descriere3:'',
        descriere4:'',
        pret:'',
      }
    }
  }
}
