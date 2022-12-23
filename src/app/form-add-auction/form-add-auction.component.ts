import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DtoOutputCreateAuction} from '../auction-hub/dtos/dto-output-create-auction';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user-hub/user.service';
import {DtoInputUser} from '../user-hub/dtos/dto-input-user';

@Component({
  selector: 'app-form-add-auction',
  templateUrl: './form-add-auction.component.html',
  styleUrls: ['./form-add-auction.component.css'],
})
export class FormAddAuctionComponent implements OnInit {
  // userTest de type DtoInputUser avec ses propriétés initialisées à des valeurs par défaut
  public user: DtoInputUser = {
    id: 0,
    pseudo: '',
    mail: '',
    pass: '',
  };

  @Output()
  AuctionCreated: EventEmitter<DtoOutputCreateAuction> = new EventEmitter<DtoOutputCreateAuction>();

  // Déclaration de la date et de sa représentation sous forme de chaîne de caractères
  date: Date = new Date(2022, 12, 24, 23, 59, 59);
  dateString: string = this.date.toISOString();

  url: any = '';

  // Déclaration du formulaire de création d'enchère avec ses contrôles et validateurs
  form: FormGroup = this._fb.group({
    title: this._fb.control('', Validators.required),
    descri: this._fb.control('', [Validators.required, Validators.minLength(5)]),
    category: this._fb.control('', Validators.required),
    img: this._fb.control('', [Validators.required, Validators.pattern(/^.+\.(jpg|jpeg)$/i)]),
    price: this._fb.control(0, [Validators.required, Validators.min(0)]),
    idUserBid: this._fb.control(''),
    timer: this._fb.control(''),
  });

  constructor(private _fb: FormBuilder, private _userService: UserService) {
  }

  ngOnInit(): void {
    // Récupération de l'utilisateur actuel lorsque le composant est initialisé
    this._userService.fetchById().subscribe((u) => (this.user = u));
  }


  private fetchById() {
    this._userService.fetchById().subscribe(u => this.user = u);
  }

  emitAuctionCreated() {
    this.AuctionCreated.next({
      idUser: 1,
      title: this.form.value.title,
      category: this.form.value.category,
      descri: this.form.value.descri,
      img: this.url,
      price: this.form.value.price,
      idUserBid: this.user.id,
      timer: this.form.value.timer
    });
  }

  selectFile(event: any) {
    // @ts-ignore
    const file = (event.target as HTMLInputElement).files[0];

    // Vérification que le fichier sélectionné est au format JPEG
    if (file.type === 'image/jpeg') {
      // Création d'un lecteur de fichiers
      const reader = new FileReader();
      reader.onloadend = () => {
        this.url = reader.result as string;
        // Remplacement de l'en-tête de données de l'image par une chaîne vide
        this.url = this.url.replace('data:image/jpeg;base64,', '');
      };
      reader.readAsDataURL(file);
    } else {
      alert('Seuls les fichiers JPEG sont acceptés !');
    }
  }


  // Getters et Setters


  get titleControl() {
    return this.form.controls['title'];
  }

  get descriptionControl() {
    return this.form.controls['descri'];
  }

  get categoryControl() {
    return this.form.controls['category'];
  }

  get imageControl() {
    return this.form.controls['img'];
  }

  get priceControl() {
    return this.form.controls['price'];
  }

  get timerControl() {
    return this.form.controls['timer'];
  }

  get idUserBid() {
    return this.form.controls['idUserBid'];
  }

  resetForm() {
    this.form.reset();
  }


}
