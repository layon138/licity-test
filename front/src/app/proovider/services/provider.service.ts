import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ResponseBuildinProject } from '../model/provider.model';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {


    constructor(private httpService: HttpClient) {}
  
    async getBuildingProject(): Promise<ResponseBuildinProject> {
      const response = await firstValueFrom(
        this.httpService.get<ResponseBuildinProject>('http://localhost:3000/buildingProject/list', {
          headers: {
           
          },
        })
      );
  
      return response;
    }
  
  
  }
  
