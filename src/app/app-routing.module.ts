import { CadastroComponent } from './cadastro/cadastro.component';
import { FolderComponent } from './folder/folder.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {path:'folder', component: FolderComponent},

  {path:'cadastro', component: CadastroComponent},
{
    path: 'Entrada-de-produtos',
    loadChildren: () => import('./Entrada-de-produtos/Entrada-de-produtos.module').then( m => m.EntradaDeProdutosPageModule)
  },
  {
    path: 'acesso',
    loadChildren: () => import('./acesso/acesso.module').then( m => m.AcessoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
