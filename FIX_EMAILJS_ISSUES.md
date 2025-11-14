# Fix EmailJS Template Issues

## Issue 1: Emails Are Reversed

### Quick Test:

1. Submit the **Contact Form** and check the console for:
   ```
   📋 Using Contact Template ID: template_xxxxx
   ```
2. Submit the **Supervision Form** and check the console for:
   ```
   📋 Using Supervision Template ID: template_yyyyy
   ```

### Solution A: Template IDs are Swapped in .env.local

Your `.env.local` might have the template IDs reversed. The correct mapping should be:

```bash
# CORRECT:
NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT=template_for_general_contact
NEXT_PUBLIC_EMAILJS_TEMPLATE_SUPERVISION=template_for_supervision_inquiry

# WRONG (swapped):
NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT=template_for_supervision_inquiry
NEXT_PUBLIC_EMAILJS_TEMPLATE_SUPERVISION=template_for_general_contact
```

**Fix:** Swap the template IDs in your `.env.local` file

### Solution B: Templates Were Created with Wrong Names

Check your EmailJS dashboard:

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Click on **Email Templates**
3. Verify which template is which by checking their content
4. Make sure the Template ID you're using matches the correct template

---

## Issue 2: Deleted Title Still Showing in Email

This is a **caching issue** with EmailJS. Changes to templates need to be properly saved and may take time to propagate.

### Fix Steps:

1. **Save AND Publish the Template:**
   - Go to EmailJS Dashboard → Email Templates
   - Open the template you edited
   - Make sure you clicked **"Save"** after making changes
   - Some templates need to be **"Published"** - look for a publish button

2. **Clear EmailJS Cache:**
   - In the EmailJS dashboard, try these:
     - Click "Save" again on your template (even if no changes)
     - Try duplicating the template with a new ID
     - Delete browser cache/cookies for dashboard.emailjs.com

3. **Use Template Version Control:**
   - EmailJS sometimes caches old template versions
   - Try creating a NEW template with your updated content
   - Update the template ID in `.env.local` to use the new one

4. **Wait for Propagation:**
   - EmailJS can take 5-10 minutes to update templates globally
   - Try again after waiting

---

## How to Verify Which Template is Which

### Method 1: Check Template Content

1. Go to EmailJS Dashboard → Email Templates
2. Open each template
3. Look at the subject line or body content
4. Note which Template ID belongs to which purpose

### Method 2: Test with Console Logs

The console now shows which template ID is being used:

```
📋 Using Contact Template ID: template_abc123
📋 Using Supervision Template ID: template_xyz789
```

Compare these IDs with what you see in the EmailJS dashboard.

### Method 3: Temporarily Add Unique Text

1. Edit each template in EmailJS to add unique text:
   - Contact template: Add "THIS IS CONTACT TEMPLATE" at the top
   - Supervision template: Add "THIS IS SUPERVISION TEMPLATE" at the top
2. Save both templates
3. Test both forms
4. See which text appears in which email
5. Remove the test text once verified

---

## Quick Checklist to Fix Both Issues

### Step 1: Verify Template IDs

- [ ] Open EmailJS Dashboard → Email Templates
- [ ] Note the Template ID for your Contact form template
- [ ] Note the Template ID for your Supervision form template

### Step 2: Check Your .env.local

```bash
NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT=paste_contact_template_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_SUPERVISION=paste_supervision_template_id_here
```

### Step 3: Fix the Swap (if needed)

If they're reversed, swap them:

```bash
# Before (wrong):
NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT=template_supervision_abc
NEXT_PUBLIC_EMAILJS_TEMPLATE_SUPERVISION=template_contact_xyz

# After (correct):
NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT=template_contact_xyz
NEXT_PUBLIC_EMAILJS_TEMPLATE_SUPERVISION=template_supervision_abc
```

### Step 4: Restart Dev Server

```bash
# CTRL+C to stop
npm run dev
```

### Step 5: Fix Template Updates Not Showing

- [ ] Go back to EmailJS Dashboard
- [ ] Edit the template that has the old title
- [ ] Delete the title completely
- [ ] Click **Save**
- [ ] Look for a **Publish** button (if available)
- [ ] Wait 5 minutes
- [ ] Test again

### Step 6: Nuclear Option - Create New Templates

If templates still won't update:

1. Create brand new templates in EmailJS
2. Copy your content (without the unwanted title)
3. Get the new Template IDs
4. Update `.env.local` with new IDs
5. Restart dev server
6. Test

---

## Common Gotchas

### Gotcha 1: Auto-Save Confusion

EmailJS sometimes shows "Auto-saved" but doesn't actually save. Always manually click "Save".

### Gotcha 2: Template Variables

Make sure your templates use the exact same variable names:

- Contact: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{reason}}`, `{{referral_source}}`, `{{message}}`
- Supervision: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{licensure_status}}`, `{{supervision_type}}`, `{{message}}`

### Gotcha 3: Browser Cache

Your browser might cache the old `.env.local` values. Try:

- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Open in incognito/private window
- Clear browser cache

---

## Still Having Issues?

If the templates are still reversed after checking everything:

1. **Share these console outputs:**
   - The Template ID shown when submitting Contact form
   - The Template ID shown when submitting Supervision form
   - Screenshot of your EmailJS templates list showing Template IDs

2. **Double-check in EmailJS History:**
   - Go to EmailJS Dashboard → History
   - Click on a recent email attempt
   - It shows which template was used
   - Verify it matches what you expect

3. **Try the Test:**
   Add temporary unique text to each template to identify them:
   - Contact: "TEST-CONTACT-TEMPLATE"
   - Supervision: "TEST-SUPERVISION-TEMPLATE"

Then see which text appears in which email!

---

**Most likely cause:** The template IDs are simply swapped in your `.env.local` file. Swap them and restart your dev server! 🔄
