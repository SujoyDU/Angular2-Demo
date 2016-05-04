
import {Component} from 'angular2/core';
import {OnInit} from "angular2/core";

declare var jstree: any;
declare var jQuery:any;

@Component({
  selector: 'demo-app',
  template:`

  <h1>Angular2 HTTP Demo App</h1>


  <div id = 'jstree_demo'>
  <p>this is jstree</p>
  <p>{{jst}}</p>



  `
})
export class JstreeDemoComponent implements OnInit {




  jst:any;



  ngOnInit() {

    this.getJstree();
  }




  getJstree(){
    this.jst = jQuery('#jstree_demo').jstree({
            "core" : {
              "animation" : 0,
              "check_callback" : true,
              "themes" : { "stripes" : true },
              'data' : {
                'url' :'app/jstreeDemo/variables.json'



              }
            },
            "checkbox": {
                    "keep_selected_style": false
               },
            "plugins" : [
              "contextmenu", "dnd", "search",
              "state", "types", "wholerow"
            ]
          });
  }


}
