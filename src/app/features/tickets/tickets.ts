import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="d-flex justify-content-center">
      <form [formGroup]="ticketForm" (ngSubmit)="submitTicket()" class="p-4 bg-white rounded shadow-sm w-100" style="max-width: 500px;">
      
        <h3 class="h4 fw-bold mb-4 text-dialog-red">Submit a Support Ticket</h3>
        
        <div class="mb-3">
          <label class="form-label fw-medium text-secondary">Category</label>
          <select formControlName="category" class="form-select">
            <option value="billing">Billing Issue</option>
            <option value="network">Network Coverage</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="mb-3">
          <label class="form-label fw-medium text-secondary">Description</label>
          <textarea formControlName="description" rows="4" class="form-control"></textarea>
        </div>
        
        <div class="mb-4">
          <label class="form-label fw-medium text-secondary">Attachment (Optional)</label>
          <input type="file" (change)="onFileSelect($event)" accept="image/*,.pdf" class="form-control" />
        </div>
        
        
        <button type="submit" [disabled]="ticketForm.invalid || isSubmitting()" 
                class="btn btn-dialog w-100">
          {{ isSubmitting() ? 'Submitting...' : 'Create Ticket' }}
        </button>
      </form>
    </div>
  `
})
export class TicketsComponent {
  ticketForm: ReturnType<FormBuilder['group']>;
  
  selectedFile = signal<File | null>(null);
  isSubmitting = signal(false);

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.ticketForm = this.fb.group({
      category: ['network', Validators.required],
      description: ['', Validators.required]
    });
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile.set(event.target.files[0]);
    }
  }

  submitTicket() {
    if (this.ticketForm.valid) {
      this.isSubmitting.set(true);
      const formData = new FormData();
      
      formData.append('ticket', JSON.stringify(this.ticketForm.value));
      if (this.selectedFile()) {
        formData.append('file', this.selectedFile() as Blob);
      }

      this.http.post('http://localhost:8084/api/tickets', formData).subscribe({
        next: (res) => { 
          alert('Ticket submitted successfully!'); 
          this.isSubmitting.set(false);
          this.ticketForm.reset();
        },
        error: (err) => { 
          console.error('Upload failed', err); 
          this.isSubmitting.set(false); 
        }
      });
    }
  }
}