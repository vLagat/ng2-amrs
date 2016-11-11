import { Component, OnInit } from '@angular/core';
import { AppFeatureAnalytics } from '../../shared/app-analytics/app-feature-analytics.service';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  messageType = 'error';
  message = 'There is a problem with your internet connection. Please try to connect again';
  isVisible = true;

  doSomething(): void {
    alert('Test function working');
  }

  constructor(private appFeatureAnalytics: AppFeatureAnalytics,
              private patientService: PatientService) {
  }

  ngOnInit() {
    this.patientService.currentlyLoadedPatient.subscribe(
      (patient) => {
        console.log('---->', patient);
      }
    );
    this.appFeatureAnalytics
      .trackEvent('Patient Dashboard', 'Patient Info Loaded', 'ngOnInit');
  }

}
