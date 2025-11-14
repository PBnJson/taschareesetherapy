# EmailJS Setup Guide

## Overview

You need to create 2 email templates in the EmailJS dashboard and add their IDs to your `.env.local` file.

---

## Step 1: Create Email Templates in EmailJS Dashboard

Go to [EmailJS Dashboard](https://dashboard.emailjs.com/) → **Email Templates** → **Create New Template**

### Template 1: Contact Form (Therapy Inquiries)

**Template Name:** `Contact Form - Tascha Reese Therapy`

**Subject Line:**

```
New Contact Form Submission from {{from_name}}
```

**Email Body:**

```
New contact form submission from your website:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INQUIRY DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reason for contacting: {{reason}}
How they heard about you: {{referral_source}}

Message:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This message was sent from your website contact form.
Please respond directly to {{from_email}}
```

**After creating this template, copy the Template ID** (e.g., `template_abc123xyz`)

---

### Template 2: Supervision Inquiry Form

**Template Name:** `Supervision Inquiry - Clinical Supervision`

**Subject Line:**

```
New Supervision Inquiry from {{from_name}}
```

**Email Body:**

```
New supervision inquiry from your website:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SUPERVISION DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Current Licensure Status: {{licensure_status}}
Supervision Type Preference: {{supervision_type}}

Message:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This inquiry was sent from your website supervision page.
Please respond directly to {{from_email}}
```

**After creating this template, copy the Template ID** (e.g., `template_xyz789abc`)

---

## Step 2: Update Your `.env.local` File

Add the template IDs to your existing `.env.local` file:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT=your_contact_template_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_SUPERVISION=your_supervision_template_id_here
```

**Replace the placeholder values:**

- `your_contact_template_id_here` → Template ID from Template 1
- `your_supervision_template_id_here` → Template ID from Template 2

---

## Step 3: Restart Your Development Server

After updating `.env.local`, restart your Next.js dev server:

```bash
# Stop the server (Ctrl+C)
# Then restart it
npm run dev
```

---

## Step 4: Test Your Forms

### Test Contact Form

1. Go to `http://localhost:3000` (or scroll to Contact section)
2. Fill out the form with test data
3. Submit and check your email

### Test Supervision Form

1. Go to `http://localhost:3000/supervision`
2. Fill out the supervision inquiry form
3. Submit and check your email

---

## Troubleshooting

### Form submits but no email received:

1. Check your EmailJS dashboard for failed sends
2. Verify all environment variables are correct
3. Make sure you restarted the dev server after updating `.env.local`
4. Check spam folder

### "Service ID not found" error:

- Double-check `NEXT_PUBLIC_EMAILJS_SERVICE_ID` in `.env.local`

### "Template ID not found" error:

- Verify the template IDs are correct
- Make sure templates are published in EmailJS dashboard

### Environment variables not loading:

- Ensure variable names start with `NEXT_PUBLIC_`
- Restart dev server after any `.env.local` changes

---

## What's Been Updated in the Code

### ✅ ContactSection.tsx

- Connected to `NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT`
- Sends: name, email, phone, reason, referral source, message
- Form resets on successful submission

### ✅ Supervision Page (supervision/page.tsx)

- Connected to `NEXT_PUBLIC_EMAILJS_TEMPLATE_SUPERVISION`
- Sends: name, email, phone, licensure status, supervision type, message
- Form resets on successful submission

### ✅ Both Forms

- Display success/error messages
- Properly handle loading states
- Validate required fields
- Use environment variables (no hardcoded credentials)

---

## Security Notes

✅ **Good:**

- All credentials use environment variables
- `.env.local` is in `.gitignore` (not committed to git)
- EmailJS public key is safe to use in client-side code

⚠️ **Remember:**

- Never commit `.env.local` to git
- Keep your EmailJS account secure
- Monitor your EmailJS usage dashboard

---

## Need Help?

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Dashboard](https://dashboard.emailjs.com/)
- Check the browser console for error messages when testing

---

**All set!** Once you add those two template IDs to your `.env.local`, your contact forms will be fully functional! 🎉
