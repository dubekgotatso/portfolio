import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  navigation_profile = [

    'Home','Profile','Skills', 'Projects','Contact','About','Kgotatso',
  ]

}


}

