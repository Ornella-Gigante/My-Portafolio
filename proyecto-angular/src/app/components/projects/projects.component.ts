// projects.component.ts
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../service/project.service';
import { Project } from './projects.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [CommonModule]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.githubService.getRepositories().subscribe(
      repos => {
        this.projects = repos.map(repo => ({
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          homepage: repo.homepage,
          
        }));
      }
    );
  }
}
