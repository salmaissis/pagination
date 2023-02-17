import { Component } from '@angular/core';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20];

  constructor(private usersService:ItemsService){}
  ngOnInit():void {
    this.postList();
  }

  postList():void {
    this.usersService.getAllPosts().subscribe((response) => {
      this.POSTS = response  
    }
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.postList();
    console.log(this.page)
  }
  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.postList();
  }
}
