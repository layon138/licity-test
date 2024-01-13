import { Component } from '@angular/core';
import { ProviderService } from '../../services/provider.service';
import { Router } from '@angular/router';
import { BuildinProject } from '../../model/provider.model';

@Component({
  selector: 'app-building-projectlist',
  templateUrl: './building-projectlist.component.html',
  styleUrl: './building-projectlist.component.css'
})
export class BuildingProjectlistComponent {
  listBuildinProject:BuildinProject[]=[]
  constructor(private providerService: ProviderService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    this.loadPosts();
  }

  async loadPosts() {
    const responseBuildingProyect = await this.providerService.getBuildingProject();
    this.listBuildinProject = responseBuildingProyect.data.list || [];
  }


}
