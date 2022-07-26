import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsComponent } from './movie-details.component';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    component.movie = {
      title: 'Test Movie',
      runtime: '105 min',
      year: '1994',
      Ratings: [
        {
          source: 'meta',
          value: '95%'
        },
        {
          source: 'source',
          value: '5.5/10'
        },
        {
          source: 'imdb',
          value: '34/100'
        }
      ],
      rated: 'PG',
      poster: 'https://m.media-amazon.com/images/M/MV5BYjZjODRlMjQtMjJlYy00ZDBjLTkyYTQtZGQxZTk5NzJhYmNmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get rating', () => {
    let value = component.getRating();
    expect(value).toEqual("6.1")
  })

  it('should get runtime', () => {
    let runtime = component.getRuntime();
    expect(runtime).toEqual('1h 45m')
  })

  it('should handle invalid runtime', () => {
    component.movie.runtime = 'abcd min'
    let runtime = component.getRuntime();
    expect(runtime).toEqual('N/A')
  })

  it('should get poster URL', () => {
    let url = component.getPosterURL();
    expect(url).toEqual(component.movie.poster)
  })
  
  it('should handle poster URL', () => {
    component.movie.poster = "n/a"
    let url = component.getPosterURL();
    expect(url).toEqual('https://via.placeholder.com/145x215.png')
  })
  
});
