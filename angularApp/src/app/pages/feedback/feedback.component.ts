import {Component, OnDestroy, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TelegramService} from "../../services/telegram.service";

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent implements OnInit, OnDestroy{
  feedback = signal('')

  constructor(private telegram: TelegramService) {
    this.sendData = this.sendData.bind(this)
  }

  ngOnInit(): void {
    this.telegram.MainButton.setText('Отправить сообщение')
    this.telegram.MainButton.hide()
    this.telegram.MainButton.onClick(this.sendData)
  }

  sendData() {
    this.telegram.sendData({feedback: this.feedback()})
  }

  ngOnDestroy(): void {
    this.telegram.MainButton.offClick(this.sendData)
  }

  handleChange(event) {
    this.feedback.set(event.target.value)
    if(this.feedback().trim()) {
      this.telegram.MainButton.show()
    } else {
      this.telegram.MainButton.hide()
    }
  }
}
