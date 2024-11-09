import { Component } from '@angular/core';

@Component({
  selector: 'app-main-portal',
  templateUrl: './main-portal.component.html',
  styleUrl: './main-portal.component.css'
})
export class MainPortalComponent {
  coreBeliefs = [
    {
      title: 'Striving for Excellence',
      text: 'Excellence is the limitless capacity to raise the calibre of what you provide.'
    },
    {
      title: 'Your Financial Success',
      text: 'We work relentlessly with you to identify ways to save money and ensure financial success.'
    },
    {
      title: 'Combined Efforts to Achieve Excellence',
      text: 'We strive for excellence and work with you to ensure business growth and success.'
    },
   

  ];
}
