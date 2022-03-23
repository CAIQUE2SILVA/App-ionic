import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntradaDeProdutosPage } from './entrada-de-produtos.page';

describe('EntradaDeProdutosPage', () => {
  let component: EntradaDeProdutosPage;
  let fixture: ComponentFixture<EntradaDeProdutosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradaDeProdutosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntradaDeProdutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
