import { Component,ViewEncapsulation  } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
export interface menu{
  name:string;
  icon:string;
  href:string;
}

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class NavigateComponent {
  menu:menu[] = [
    {
      name:'Главная страница',
      icon:`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      href:'/home'
    },
    {
      name:'Управление задачами',
      icon:`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3345 1.7502H6.66549C3.64449 1.7502 1.75049 3.8892 1.75049 6.9162V15.0842C1.75049 18.1112 3.63549 20.2502 6.66549 20.2502H15.3335C18.3645 20.2502 20.2505 18.1112 20.2505 15.0842V6.9162C20.2505 3.8892 18.3645 1.7502 15.3345 1.7502Z" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.43994 11.0002L9.81394 13.3732L14.5599 8.6272" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `,
      href:'/task-list'
    },
    {
      name:'Календарь',
      icon:`<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.09253 8.40427H18.9165" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14.442 12.3097H14.4512" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.0047 12.3097H10.014" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.55793 12.3097H5.5672" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14.442 16.1962H14.4512" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.0047 16.1962H10.014" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.55793 16.1962H5.5672" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14.0438 1V4.29078" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.9654 1V4.29078" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2383 2.57922H5.77096C2.83427 2.57922 1 4.21516 1 7.22225V16.2719C1 19.3263 2.83427 21 5.77096 21H14.229C17.175 21 19 19.3546 19 16.3475V7.22225C19.0092 4.21516 17.1842 2.57922 14.2383 2.57922Z" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `,
      href:'/calendar'
    },
    {
      name:'Команда',
      icon:`<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.6 17V15.2222C13.6 14.2792 13.2207 13.3749 12.5456 12.7081C11.8705 12.0413 10.9548 11.6667 10 11.6667H4.6C3.64522 11.6667 2.72955 12.0413 2.05442 12.7081C1.37928 13.3749 1 14.2792 1 15.2222V17M19 17V15.2222C18.9994 14.4344 18.7339 13.6691 18.2452 13.0465C17.7565 12.4239 17.0723 11.9792 16.3 11.7822M13.6 1.11556C14.3744 1.31138 15.0607 1.75618 15.5509 2.37983C16.041 3.00348 16.3071 3.77052 16.3071 4.56C16.3071 5.34948 16.041 6.11652 15.5509 6.74017C15.0607 7.36382 14.3744 7.80862 13.6 8.00444M10.9 4.55556C10.9 6.51923 9.28822 8.11111 7.3 8.11111C5.31177 8.11111 3.7 6.51923 3.7 4.55556C3.7 2.59188 5.31177 1 7.3 1C9.28822 1 10.9 2.59188 10.9 4.55556Z" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `,
      href:'/team'
    },
    {
      name:'Статистика',
      icon:`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.24487 13.7815L9.23801 9.89131L12.6522 12.5732L15.5813 8.79291" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="18.9954" cy="3.20021" r="1.9222" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.9245 2.12012H6.65679C3.64535 2.12012 1.77808 4.25284 1.77808 7.26428V15.3467C1.77808 18.3581 3.60874 20.4817 6.65679 20.4817H15.2609C18.2724 20.4817 20.1396 18.3581 20.1396 15.3467V8.30776" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `,
      href:'/statistic'
    },
    {
      name:'Профиль',
      icon:`<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 19V17C15 15.9391 14.5786 14.9217 13.8284 14.1716C13.0783 13.4214 12.0609 13 11 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19M12 5C12 7.20914 10.2091 9 8 9C5.79086 9 4 7.20914 4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5Z" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `,
      href:'/profile'
    },
    {
      name:'Настройки',
      icon:`<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8067 6.62355L18.1842 5.54346C17.6577 4.62954 16.4907 4.31426 15.5755 4.83866V4.83866C15.1399 5.09528 14.6201 5.16809 14.1307 5.04103C13.6413 4.91396 13.2226 4.59746 12.9668 4.16131C12.8023 3.88409 12.7139 3.56833 12.7105 3.24598V3.24598C12.7254 2.72916 12.5304 2.22834 12.17 1.85761C11.8096 1.48688 11.3145 1.2778 10.7975 1.27802H9.5435C9.03697 1.27801 8.55131 1.47985 8.194 1.83888C7.83669 2.19791 7.63717 2.68453 7.63961 3.19106V3.19106C7.6246 4.23686 6.77248 5.07675 5.72657 5.07664C5.40421 5.07329 5.08846 4.98488 4.81123 4.82035V4.82035C3.89606 4.29595 2.72911 4.61123 2.20254 5.52516L1.53435 6.62355C1.00841 7.53633 1.3194 8.70255 2.23 9.23225V9.23225C2.8219 9.57398 3.18653 10.2055 3.18653 10.889C3.18653 11.5725 2.8219 12.204 2.23 12.5457V12.5457C1.32056 13.0719 1.00923 14.2353 1.53435 15.1453V15.1453L2.16593 16.2345C2.41265 16.6797 2.8266 17.0082 3.31619 17.1474C3.80578 17.2865 4.33064 17.2248 4.77462 16.976V16.976C5.21108 16.7213 5.73119 16.6515 6.21934 16.7821C6.70749 16.9128 7.12324 17.233 7.37416 17.6716C7.5387 17.9488 7.62711 18.2646 7.63046 18.5869V18.5869C7.63046 19.6435 8.48696 20.5 9.5435 20.5H10.7975C11.8505 20.5 12.7055 19.6491 12.7105 18.5961V18.5961C12.7081 18.088 12.9089 17.6 13.2682 17.2407C13.6275 16.8814 14.1155 16.6806 14.6236 16.6831C14.9452 16.6917 15.2596 16.7797 15.5389 16.9393V16.9393C16.4517 17.4653 17.6179 17.1543 18.1476 16.2437V16.2437L18.8067 15.1453C19.0618 14.7074 19.1318 14.1859 19.0012 13.6963C18.8706 13.2067 18.5502 12.7893 18.111 12.5366V12.5366C17.6718 12.2839 17.3514 11.8665 17.2208 11.3769C17.0902 10.8872 17.1603 10.3658 17.4154 9.9279C17.5812 9.63827 17.8214 9.39814 18.111 9.23225V9.23225C19.0161 8.70283 19.3264 7.54343 18.8067 6.63271V6.63271V6.62355Z" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="10.175" cy="10.889" r="2.63616" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `,
      href:'/settings'
    },
  ];

  constructor(private AuthService:AuthService){}
  logout(){
  this.AuthService.doLogout();
  }

}
