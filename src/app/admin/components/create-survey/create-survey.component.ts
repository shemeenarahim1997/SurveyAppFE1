import { InviteService } from './../../services/invite.service';
import { SurveyService } from './../../services/survey.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateSurveyComponent implements OnInit {

  items: MenuItem[];
  activeIndex: number = 0;
  surveyId;
  surveyPublished = false;
  columns = [
    { field: 'username', header: 'User Name ' },
    { field: 'email', header: 'Email' },
  ];

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private inviteService: InviteService,
    private surveyService: SurveyService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.surveyId = params['surId'];
      if (params['surId']) {
        this.surveyService.getSurvey(params['surId']).pipe(take(1)).subscribe(response => {
          this.surveyPublished = response['surveyDetails'][0].survey_published;
          if (this.surveyPublished)
            this.activeIndex = 2;
        })

      }
      else {
        this.surveyPublished = false;
        this.activeIndex = 0;
      }
    });
    this.items = [{
      label: "Survey Details",
      command: (event: any) => {
        this.activeIndex = 0;
      }
    },
    {
      label: "Questions and Options",
      command: (event: any) => {
        this.activeIndex = 1;
      }

    },
    {
      label: 'Invite',
      command: (event: any) => {
        this.activeIndex = 2;
      }
    }
    ];
  }


  surveyCreated(survey) {
    this.router.navigate([], {
      queryParams: { surId: survey._id, qId: null, optId: null },
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
    this.activeIndex = 1;
  }

  surveySubmitted() {
    this.router.navigate([], { queryParams: { qId: null, optId:null }, queryParamsHandling: 'merge' });
    this.activeIndex = 2;
  }
  
  inviteUsers(users) {
    this.surveyPublished = true;
    this.surveyService.editSurvey(this.surveyId,{
      survey_published: true
    }).subscribe();
    this.inviteService.inviteUsers(users,this.surveyId).subscribe();
  }
}
