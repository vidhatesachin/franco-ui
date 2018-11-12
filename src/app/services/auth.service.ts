import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {Headers,Http} from '@angular/http';
import { Login } from '../models/login.model';
  


@Injectable()
export class AuthenticationService {
 
  
  constructor(
    private http:Http
  ) { }

  authenticateUser(loginVO:Login){
    return this.http.post(environment.servicesURL+'login',loginVO);
  }
/*
  fetchAfWeblinks(accountingFirmsId){
      
    return this.http.get(environment.apiUrl1+'weblinkses/search/AfWeblinks?accountingFirmsId='+accountingFirmsId,this.dashboardService.options);
  }

  fetchMyPages(portalUsersId){
    
  return this.http.get(environment.apiUrl+'mypageses/search/findByPortalUser?portalUsersId='+portalUsersId,this.dashboardService.options);
  }
  
  fetchCustomWeblinks(pageId){
      
    return this.http.get(environment.apiUrl1+'weblinkses/search/customWeblinks?pageId='+pageId,this.dashboardService.options);
  }


  save(weblink:Weblink){
    return this.http.post(environment.apiUrl+'weblinks/save',weblink,this.dashboardService.options)
  }
  savePage(page:MyPage){
    return this.http.post(environment.apiUrl+'mypages/save',page,this.dashboardService.options)
  }
  deletePage(page:MyPage){
    return this.http.delete(environment.apiUrl+'mypageses/'+page.pageId,this.dashboardService.options)
  }

  deleteWeblink(webLink:Weblink){
    return this.http.delete(environment.apiUrl+'weblinkses/'+webLink.weblinksId,this.dashboardService.options)
  }

  fetchIcon(weblinksId:number){
    return this.http.get(environment.apiUrl+'weblinks/icon/'+weblinksId,this.dashboardService.options);
  }

  markFavoriteForAf(weblinks:Weblink[],accountingFirmsId:string){
    return this.http.post(environment.apiUrl+'weblinks/markfavorite/'+accountingFirmsId,weblinks,this.dashboardService.options)
  } */

}
