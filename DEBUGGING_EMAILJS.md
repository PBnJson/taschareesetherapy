# EmailJS Debugging Guide

## How to Debug Your Forms

I've added detailed console logging to help you pinpoint exactly where issues are occurring.

---

## Step 1: Open Browser Console

1. Open your site in Chrome/Edge/Firefox
2. Press `F12` or right-click → "Inspect" → "Console" tab
3. Submit a form (either contact or supervision)

---

## Step 2: Read the Console Logs

You'll see logs like this:

### ✅ **If Everything is Working:**

```
🔍 EmailJS Configuration Check:
Service ID: ✅ Configured
Template ID (Contact): ✅ Configured
Public Key: ✅ Configured
✅ All EmailJS variables configured. Attempting to send email...
📧 Sending email with params: {from_name: "Test", from_email: "test@email.com", ...}
✅ Email sent successfully! {status: 200, text: "OK"}
🏁 Form submission complete
```

### ❌ **If Template IDs are Missing:**

```
🔍 EmailJS Configuration Check:
Service ID: ✅ Configured
Template ID (Contact): ❌ Missing
Public Key: ✅ Configured
❌ EmailJS Error: Missing environment variables in .env.local
📝 Please add NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT to your .env.local file
```

**Fix:** You need to add the template IDs to `.env.local`:

```bash
NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT=template_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_SUPERVISION=template_yyyyy
```

### ❌ **If EmailJS Credentials are Wrong:**

```
🔍 EmailJS Configuration Check:
Service ID: ✅ Configured
Template ID (Contact): ✅ Configured
Public Key: ✅ Configured
✅ All EmailJS variables configured. Attempting to send email...
📧 Sending email with params: {...}
❌ Email sending failed: Error: The service ID is invalid
Error message: The service ID is invalid
```

**Fix:** Double-check your Service ID in EmailJS dashboard

---

## Step 3: Check EmailJS Dashboard

EmailJS also has its own logging! Go to:

👉 **[EmailJS Dashboard](https://dashboard.emailjs.com/)**

### Navigate to "History" Tab:

- You'll see all email attempts (successful and failed)
- Failed attempts will show **why** they failed
- Common errors:
  - "Template not found" → Wrong template ID
  - "Service not found" → Wrong service ID
  - "Invalid public key" → Wrong public key
  - "Template variable missing" → Template expects a variable you didn't send

### What to Check:

1. **Email Services** → Make sure your service is active
2. **Email Templates** → Verify template IDs match your `.env.local`
3. **History** → See real-time email attempts and failures

---

## Common Issues & Solutions

### Issue 1: "Template not found"

**Cause:** Template ID in `.env.local` doesn't match EmailJS dashboard  
**Fix:**

1. Go to EmailJS → Email Templates
2. Copy the **exact Template ID** (e.g., `template_abc123xyz`)
3. Paste it in `.env.local`
4. Restart dev server: `npm run dev`

### Issue 2: "Service not found"

**Cause:** Service ID is incorrect  
**Fix:**

1. Go to EmailJS → Email Services
2. Copy the **Service ID** (e.g., `service_abc123`)
3. Update `NEXT_PUBLIC_EMAILJS_SERVICE_ID` in `.env.local`
4. Restart dev server

### Issue 3: Nothing happens when I submit

**Cause:** JavaScript error or environment variables not loading  
**Fix:**

1. Check browser console for red errors
2. Make sure all env variables start with `NEXT_PUBLIC_`
3. Restart dev server after editing `.env.local`

### Issue 4: Email sends but I don't receive it

**Cause:** Email going to spam or wrong recipient  
**Fix:**

1. Check spam/junk folder
2. Check EmailJS dashboard → Email Templates → "To Email" field
3. Make sure "To Email" is YOUR email address

---

## Your Current Setup (Based on .env.local)

You mentioned you have lines 1-4 in `.env.local`, which likely means you have:

✅ `NEXT_PUBLIC_EMAILJS_SERVICE_ID`  
✅ `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`  
❓ **Missing:** `NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT`  
❓ **Missing:** `NEXT_PUBLIC_EMAILJS_TEMPLATE_SUPERVISION`

### What You Need to Add:

After creating your email templates in the EmailJS dashboard, add these two lines to `.env.local`:

```bash
NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT=template_your_contact_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_SUPERVISION=template_your_supervision_id_here
```

Then **restart your dev server**:

```bash
# Press Ctrl+C to stop the server
npm run dev
```

---

## Testing Checklist

Use this checklist to verify everything:

- [ ] Created 2 templates in EmailJS dashboard
- [ ] Copied both template IDs
- [ ] Added both template IDs to `.env.local`
- [ ] All 4 env variables in `.env.local`:
  - [ ] `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
  - [ ] `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
  - [ ] `NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT`
  - [ ] `NEXT_PUBLIC_EMAILJS_TEMPLATE_SUPERVISION`
- [ ] Restarted dev server after editing `.env.local`
- [ ] Opened browser console (F12)
- [ ] Submitted test form
- [ ] Checked console logs for ✅ or ❌ messages
- [ ] Checked EmailJS dashboard → History tab
- [ ] Checked email inbox (and spam folder)

---

## Pro Tips

### Tip 1: Test with a Simple Template First

Start with a basic template like:

```
New inquiry from {{from_name}}
Email: {{from_email}}
```

This helps verify everything is working before adding complexity.

### Tip 2: Use Different Emails for Testing

If you're testing repeatedly, use different email addresses or add a timestamp to avoid spam filters.

### Tip 3: Monitor the EmailJS Dashboard

Keep the EmailJS dashboard open in another tab while testing. It shows email attempts in real-time!

### Tip 4: Check the Network Tab

In browser DevTools → Network tab → Filter by "XHR" → Look for requests to `api.emailjs.com`

- If you see these requests, EmailJS is being called
- Click on them to see the response (success or error details)

---

## Still Having Issues?

If you're still stuck after following this guide:

1. **Share the console logs** - Copy/paste the full console output
2. **Check EmailJS dashboard** - Screenshot any errors from the History tab
3. **Verify `.env.local`** - Make sure all 4 variables are present (don't share the actual values!)

---

**The debug logs will tell you exactly what's wrong!** 🔍

Just open the browser console (F12) and submit a form - the logs will show you whether it's:

- ❌ Missing environment variables
- ❌ Wrong credentials
- ❌ EmailJS API error
- ✅ Successfully sent!
