import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ResponseBuildingProject } from '../model/bulding.model';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  constructor(private httpService: HttpClient) {}

  async addBuildingProject(post: any): Promise<ResponseBuildingProject> {
    const response = await firstValueFrom(
      this.httpService.post<ResponseBuildingProject>('http://localhost:3000/buildingProject/create', post, {
        headers: {
  
        },
      })
    );

    return response;
  }

}
