import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Result } from '../../shared/models/iMarvel';
import { CharacterComponent } from "../character/character.component";
import { InputComponent } from "../input/input.component";
import { SearchCharacterService } from '../../services/search-character.service';

@Component({
  selector: 'app-form-player',
  standalone: true,
  templateUrl: './form-player.component.html',
  styleUrl: './form-player.component.scss',
  imports: [CharacterComponent, InputComponent, ReactiveFormsModule]
})
export class FormPlayerComponent {

  characters!: Result[];

  mockData: Result[] = [
    {
      id: 1,
      name: "Mock Name",
      description: "Mock description",
      modified: "2024-04-15T00:00:00Z",
      thumbnail: {
        path: "path/to/thumbnail",
        extension: "jpg",
      },
      resourceURI: "http://example.com/api/v1/public/characters/1",
      comics: {
        available: 0,
        collectionURI: "",
        items: [],
        returned: 0
      },
      series: {
        available: 0,
        collectionURI: "",
        items: [],
        returned: 0
      },
      stories: {
        available: 0,
        collectionURI: "",
        items: [],
        returned: 0
      },
      events: {
        available: 0,
        collectionURI: "",
        items: [],
        returned: 0
      },
      urls: [
        {
          type: "detail",
          url: "http://example.com/character/mock-name",
        },
      ],
    },
    {
      id: 2,
      name: "Mock Name 2",
      description: "Mock description 2",
      modified: "2024-04-15T00:00:01Z",
      thumbnail: {
        path: "path/to/thumbnail2",
        extension: "png",
      },
      resourceURI: "http://example.com/api/v1/public/characters/2",
      comics: {
        available: 10,
        collectionURI: "http://example.com/api/v1/public/characters/2/comics",
        items: [
          {
            name: "Mock Comic 1",
            resourceURI: "http://example.com/api/v1/public/comics/12345",
          },
        ],
        returned: 0
      },
      series: {
        available: 5,
        collectionURI: "http://example.com/api/v1/public/characters/2/series",
        items: [
          {
            name: "Mock Series 1",
            resourceURI: "http://example.com/api/v1/public/series/67890",
          },
        ],
        returned: 0
      },
      stories: {
        available: 3,
        collectionURI: "http://example.com/api/v1/public/characters/2/stories",
        items: [
          {
            name: "Mock Story 1",
            resourceURI: "http://example.com/api/v1/public/stories/123456",
            // type: "c:/www/jogoDaVelhaAngular/src/app/shared/models/iMarvel",
          },
        ],
        returned: 0
      },
      events: {
        available: 2,
        collectionURI: "http://example.com/api/v1/public/characters/2/events",
        items: [
          {
            name: "Mock Event 1",
            resourceURI: "http://example.com/api/v1/public/events/98765",
          },
        ],
        returned: 0
      },
      urls: [
        {
          type: "detail",
          url: "http://example.com/character/mock-name-2",
        },
        {
          type: "wiki",
          url: "http://example.com/wiki/Mock_Name_2",
        },
      ],
    },
    {
      id: 3,
      name: "Mock Name 2",
      description: "Mock description 2",
      modified: "2024-04-15T00:00:01Z",
      thumbnail: {
        path: "path/to/thumbnail2",
        extension: "png",
      },
      resourceURI: "http://example.com/api/v1/public/characters/2",
      comics: {
        available: 10,
        collectionURI: "http://example.com/api/v1/public/characters/2/comics",
        items: [
          {
            name: "Mock Comic 1",
            resourceURI: "http://example.com/api/v1/public/comics/12345",
          },
        ],
        returned: 0
      },
      series: {
        available: 5,
        collectionURI: "http://example.com/api/v1/public/characters/2/series",
        items: [
          {
            name: "Mock Series 1",
            resourceURI: "http://example.com/api/v1/public/series/67890",
          },
        ],
        returned: 0,
      },
      stories: {
        available: 3,
        collectionURI: "http://example.com/api/v1/public/characters/2/stories",
        items: [
          {
            name: "Mock Story 1",
            resourceURI: "http://example.com/api/v1/public/stories/123456",
            // type: "cover",
          },
        ],
        returned: 0
      },
      events: {
        available: 2,
        collectionURI: "http://example.com/api/v1/public/characters/2/events",
        items: [
          {
            name: "Mock Event 1",
            resourceURI: "http://example.com/api/v1/public/events/98765",
          },
        ],
        returned: 0
      },
      urls: [
        {
          type: "detail",
          url: "http://example.com/character/mock-name-2",
        },
        {
          type: "wiki",
          url: "http://example.com/wiki/Mock_Name_2",
        },
      ],
    }
  ];
  charFound!: Result[];
  formPlayers = new FormGroup({
    firstPlayer: new FormControl(null, Validators.required),
    secondPlayer: new FormControl({value: null, disabled: true}),
  });

  constructor(private searchCharSrv: SearchCharacterService) { }
  ngOnInit(): void {
    this.charFound = [];
    this.formPlayers.get('firstPlayer')?.valueChanges.subscribe(value => {
      const secondPlayerCtrl = this.formPlayers.get('secondPlayer') as FormControl;
      if (value) {
        secondPlayerCtrl.enable();
      } else {
        secondPlayerCtrl.disable();
        secondPlayerCtrl.setValue(null); // Limpar valor do segundo input
      }
    })
  }

  search(value: string) {
    //
    this.searchCharSrv.searchCharacter(value).subscribe(datas => {
      this.charFound = datas.data.results;
      console.log(this.charFound);

    });
  }

  characterSelected(char: Result){
    console.log(char);
  }
}
