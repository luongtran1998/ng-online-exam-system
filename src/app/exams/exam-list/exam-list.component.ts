import { Component, OnInit } from '@angular/core';
import { Exam } from '../exam.model';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {
  exams?: Exam[]
  constructor(private examService: ExamService) { }

  ngOnInit(): void {
    this.exams = this.examService.getExams();
  }

}