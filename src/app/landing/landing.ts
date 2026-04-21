import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: false,
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {

  landingForm!: FormGroup;
  year: number = new Date().getFullYear();

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {
    this.landingForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  login(){
    this.router.navigate(['/login']);
  }

  getStarted(){
    this.router.navigate(['/signup'], {
      queryParams: { email: this.landingForm.value.email }
    });
  }

  reasons = [
    {
      title: 'Enjoy on your TV',
      text: 'Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
      icon: 'tv'
    },
    {
      title: 'Download your shows to watch offline',
      text: 'Take your favorite content with you and watch it anytime, anywhere.',
      icon: 'file_download'
    },
    {
      title: 'Watch everywhere',
      text: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.',
      icon: 'devices'
    }
  ];

  faqs = [
    {
      question: 'What is Netflix?',
      answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There’s always something new to discover and new TV shows and movies are added every week!'
    },
    {
      question: 'How much does Netflix cost?',
      answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 9.99 to USD 19.99 a month. No extra costs, no contracts.'
    }
  ]
}
