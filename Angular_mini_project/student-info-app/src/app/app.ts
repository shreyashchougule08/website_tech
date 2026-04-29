import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly studentName = signal('');
  protected readonly studentClass = signal('');
  protected readonly studentGrade = signal<number | null>(null);
  protected readonly saved = signal(false);

  protected readonly status = computed(() => {
    const grade = this.studentGrade();
    if (grade === null || grade < 0 || grade > 100) {
      return '';
    }
    return grade >= 35 ? 'Pass' : 'Fail';
  });

  protected readonly hasFullInfo = computed(() => {
    const grade = this.studentGrade();
    return this.studentName().trim().length > 0 &&
      this.studentClass().trim().length > 0 &&
      grade !== null &&
      grade >= 0 &&
      grade <= 100;
  });

  protected setName(value: string) {
    this.studentName.set(value);
  }

  protected setClass(value: string) {
    this.studentClass.set(value);
  }

  protected setGrade(value: string) {
    const parsed = Number(value);
    this.studentGrade.set(Number.isFinite(parsed) ? parsed : null);
  }

  protected saveStudent() {
    if (this.hasFullInfo()) {
      this.saved.set(true);
    }
  }

  protected reset() {
    this.studentName.set('');
    this.studentClass.set('');
    this.studentGrade.set(null);
    this.saved.set(false);
  }
}
