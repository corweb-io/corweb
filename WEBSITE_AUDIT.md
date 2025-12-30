# Corweb Website Audit Report

**Date:** December 30, 2024  
**Auditor:** AI Assistant  
**Scope:** Comprehensive audit covering performance, SEO, accessibility, UX/design, code quality, and conversion optimization

---

## Executive Summary

Your website has a solid foundation with modern technologies (Next.js 16, Tailwind v4, TypeScript, next-intl) and good practices already in place (structured data, i18n, dark mode, proper meta tags). However, there are several areas that could be significantly improved.

**Key Findings:**

- 🔴 **Critical:** Internal links using `<a>` instead of `Link` component breaks i18n
- 🟠 **High:** Missing page-specific metadata on several pages
- 🟠 **High:** Accessibility gaps (focus states, skip links, ARIA labels)
- 🟡 **Medium:** Code duplication and unused dependencies
- 🟢 **Good:** Strong SEO foundation, proper structured data, bilingual support

---

## 1. Performance Improvements

### 1.1 Bundle Size Optimization 🟠

**Issue:** Duplicate motion libraries installed

- Both `framer-motion` (^12.23.26) and `motion` (^11.11.17) are in `package.json`
- These are essentially the same library (motion is the newer name)

**Recommendation:** Remove one of them to save ~20KB of bundle size.

```bash
pnpm remove motion
# or
pnpm remove framer-motion
```

---

### 1.2 Image Optimization 🟡

**Issue:** No usage of Next.js `<Image />` component detected

**Recommendation:** When adding portfolio images or any static images, use the optimized Image component:

```tsx
import Image from "next/image";

<Image
  src="/images/project.webp"
  alt="Project description"
  width={800}
  height={600}
  priority // for above-fold images
/>;
```

---

### 1.3 Component-Level Code Splitting 🟡

**Issue:** Homepage loads all sections at once

**Recommendation:** Consider dynamic imports for below-fold sections:

```tsx
import dynamic from "next/dynamic";

const ProcessSection = dynamic(() => import("./sections/process"), {
  loading: () => <SectionSkeleton />,
});
```

---

### 1.4 Unused CSS Variables 🟢

**Issue:** `globals.css` contains sidebar-related CSS variables that aren't used

**Location:** `app/globals.css` lines 70-77, 134-141, 169-176

**Recommendation:** Remove unused sidebar variables to reduce CSS size.

---

## 2. SEO & Meta Improvements

### 2.1 Missing Page-Specific Metadata 🟠

**Issue:** Several pages lack `generateMetadata` function

**Affected Files:**

- `app/[locale]/portfolio/page.tsx`
- `app/[locale]/privacy/page.tsx`
- `app/[locale]/legal/page.tsx`

**Recommendation:** Add metadata generation to each page:

```tsx
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return {
    title: messages.portfolioPage.title,
    description: messages.portfolioPage.description,
  };
}
```

---

### 2.2 Missing Canonical URLs 🟠

**Issue:** No canonical URL tags set - potential duplicate content issues between locales

**Recommendation:** Add canonical URLs in each page's metadata:

```tsx
export async function generateMetadata({ params }) {
  const { locale } = await params;

  return {
    alternates: {
      canonical: `https://corweb.io/${locale}/services`,
      languages: {
        en: "https://corweb.io/en/services",
        fr: "https://corweb.io/fr/services",
      },
    },
  };
}
```

---

### 2.3 Structured Data Enhancements 🟡

**Current:** Organization schema in layout.tsx

**Recommendations:**

1. Add `FAQPage` schema to services page for rich snippets
2. Add `LocalBusiness` schema with Saint Barts address
3. Add `WebSite` schema with search action

```tsx
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Corweb",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Saint Barthélemy",
    addressCountry: "FR",
  },
  priceRange: "$$",
  areaServed: "Worldwide",
};
```

---

### 2.4 Twitter Meta Tags 🟡

**Issue:** Twitter image exists but no Twitter-specific meta tags defined

**Recommendation:** Add to layout.tsx metadata:

```tsx
twitter: {
  card: 'summary_large_image',
  title: t.title,
  description: t.description,
  creator: '@corweb_io', // if you have a Twitter handle
}
```

---

### 2.5 Internal Linking 🟡

**Issues:**

- Footer lacks comprehensive internal links
- "Learn More" button links to `#services` anchor instead of `/services` page

**Recommendations:**

- Add quick links section to footer
- Link to dedicated pages for better SEO value

---

## 3. Accessibility Improvements

### 3.1 Link Component Usage 🔴

**Critical Issue:** Several pages use raw `<a href>` instead of the `Link` component from `@/i18n/navigation`. This breaks locale prefixing!

**Affected Locations:**

- `app/[locale]/page.tsx`: lines 166-168, 174-178, 360-366, 388-395
- `app/[locale]/services/page.tsx`: line 270-276
- `app/[locale]/about/page.tsx`: line 250-256
- `app/[locale]/portfolio/page.tsx`: line 210-215

**Current (Wrong):**

```tsx
<a href="/contact" className="...">
  Contact Us
</a>
```

**Should Be:**

```tsx
import { Link } from "@/i18n/navigation";

<Link href="/contact" className="...">
  Contact Us
</Link>;
```

---

### 3.2 Skip-to-Content Link 🟠

**Issue:** No skip-to-content link for keyboard users

**Recommendation:** Add to layout or header:

```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
>
  Skip to main content
</a>

<main id="main-content">
  {/* content */}
</main>
```

---

### 3.3 Focus Indicators 🟠

**Issue:** No custom focus indicators beyond browser defaults

**Recommendation:** Add visible focus styles in `globals.css`:

```css
@layer base {
  :focus-visible {
    @apply outline-2 outline-offset-2 outline-primary;
  }
}
```

---

### 3.4 ARIA Labels 🟠

**Issues:**

- Theme toggle lacks descriptive `aria-label`
- Language switcher lacks `aria-label`
- Social links in footer (icon-only) need `aria-label`

**Example Fix for Footer:**

```tsx
<a
  href={siteConfig.links.github}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit our GitHub profile"
  className="..."
>
  <Github className="w-4 h-4" />
</a>
```

---

### 3.5 Color Contrast 🟡

**Potential Issue:** `text-muted-foreground` with value `oklch(0.6 0 0)` in dark mode may not meet WCAG AA contrast ratio (4.5:1)

**Recommendation:** Test with WebAIM contrast checker and adjust if needed:

```css
--muted-foreground: oklch(0.65 0 0); /* Slightly lighter for better contrast */
```

---

### 3.6 Form Accessibility 🟡

**Issues in `contact-form.tsx`:**

- Error messages not linked via `aria-describedby`
- Missing `aria-required="true"` on required fields

**Recommendation:**

```tsx
<Input
  id="name"
  name="name"
  aria-required="true"
  aria-describedby={errors.name ? "name-error" : undefined}
/>;
{
  errors.name && (
    <p id="name-error" className="text-sm text-destructive" role="alert">
      {errors.name}
    </p>
  );
}
```

---

## 4. UX & Design Improvements

### 4.1 Mobile Navigation 🟠

**Issues:**

1. Sheet doesn't auto-close on navigation - frustrating UX
2. Missing "Get in Touch" CTA button that desktop has

**Location:** `components/layout/mobile-nav.tsx`

**Recommendation:** Use `SheetClose` wrapper and add CTA:

```tsx
import { SheetClose } from "@/components/ui/sheet";

<nav className="flex flex-col gap-4 mt-8">
  {navKeys.map((key) => (
    <SheetClose asChild key={key}>
      <Link href={navHrefs[key]} className="...">
        {t(`nav.${key}`)}
      </Link>
    </SheetClose>
  ))}

  <SheetClose asChild>
    <Link
      href="/contact"
      className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg"
    >
      {t("common.getInTouch")}
    </Link>
  </SheetClose>
</nav>;
```

---

### 4.2 Hero Section Enhancements 🟡

**Issues:**

- Code decorations hidden on mobile (`hidden lg:block`)
- Text-heavy hero could benefit from visual element

**Recommendations:**

- Add subtle mobile alternative for code decoration
- Consider adding an illustration, abstract graphic, or animated element

---

### 4.3 Visual Variety 🟡

**Issue:** All section badges look identical (same style, colors)

**Recommendation:** Vary badge styles slightly for visual interest:

- Different icon backgrounds
- Subtle color variations
- Different border styles

---

### 4.4 Portfolio Page 🟡

**Issue:** 3 empty placeholder cards feel incomplete and don't inspire confidence

**Recommendations:**

- Reduce to 1-2 cards with more emphasis on "launching soon"
- Add personal/side project showcases
- Show technology demonstrations instead

---

### 4.5 Footer Enhancement 🟢

**Current:** Minimal footer with logo, tagline, and social links

**Recommendations:**

- Add quick links to all pages
- Add newsletter signup
- Add physical location info for trust
- Add tech stack badges

---

## 5. Code Quality Improvements

### 5.1 Duplicate Navigation Constants 🟠

**Issue:** Navigation items defined identically in two files

**Locations:**

- `components/layout/header.tsx` lines 12-20
- `components/layout/mobile-nav.tsx` lines 16-24

**Recommendation:** Create shared constant:

```tsx
// lib/navigation.ts
export const navItems = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "portfolio", href: "/portfolio" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
] as const;
```

---

### 5.2 Unused Dependencies 🟡

**Issue:** Dependencies installed but not used

- `@hookform/resolvers` - react-hook-form resolver, but using custom form
- `zod` - validation library, but using custom validation
- Duplicate motion library

**Recommendation:** Either remove unused deps or migrate to use them:

```bash
pnpm remove @hookform/resolvers motion
# or implement Zod validation in contact form
```

---

### 5.3 Component Extraction Opportunities 🟡

**Repeated Patterns:**

1. **Page Hero Section** - Same pattern across all pages

```tsx
// components/sections/page-hero.tsx
interface PageHeroProps {
  badge: string;
  badgeIcon: LucideIcon;
  title: string;
  description: string;
}

export function PageHero({
  badge,
  badgeIcon: Icon,
  title,
  description,
}: PageHeroProps) {
  // Extract common hero markup
}
```

2. **Gradient Section Wrapper** - Repeated background pattern

```tsx
// components/sections/gradient-section.tsx
export function GradientSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
```

---

### 5.4 Hardcoded Values 🟡

**Issue:** Email address `hello@corweb.io` hardcoded in multiple places

**Locations:**

- `app/[locale]/layout.tsx` line 118
- `app/[locale]/contact/page.tsx` line 48
- `messages/en.json` line 317
- `messages/fr.json` (similar)

**Recommendation:** Add to `lib/constants.ts`:

```tsx
export const siteConfig = {
  name: "Corweb",
  email: "hello@corweb.io",
  // ... existing config
};
```

---

### 5.5 Type-Safe Form Validation 🟢

**Current:** Custom validation in `contact-form.tsx`

**Recommendation:** Use Zod (already installed) for shared validation:

```tsx
// lib/schemas.ts
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
```

---

## 6. Conversion Optimization

### 6.1 CTA Clarity 🟡

**Issues:**

- Primary CTAs have terminal `$` prefix which may confuse non-technical visitors
- CTAs blend into lime green theme

**Recommendations:**

- A/B test removing the `$` symbol
- Add subtle animation or icon to draw attention
- Consider a contrasting CTA color for key pages

---

### 6.2 Trust Signals 🟡

**Current:** No testimonials, case studies, or client logos (expected for new agency)

**Recommendations:**

- Add technology partner logos (Vercel, React, etc.)
- Add security/quality badges
- Show founder photo and bio on About page
- Add "As featured in" section when applicable

---

### 6.3 Contact Form Improvements 🟡

**Issues:**

1. Success state replaces entire form - can't send another message
2. No lead qualification fields

**Recommendations:**

```tsx
// Add to success state
<Button onClick={() => setFormState("idle")} variant="outline">
  Send Another Message
</Button>

// Add budget/project type dropdown
<Select name="projectType">
  <SelectTrigger>
    <SelectValue placeholder="What type of project?" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="web">Web Application</SelectItem>
    <SelectItem value="mobile">Mobile App</SelectItem>
    <SelectItem value="tool">Internal Tool</SelectItem>
    <SelectItem value="other">Other</SelectItem>
  </SelectContent>
</Select>
```

---

### 6.4 Pricing Indicators 🟢

**Issue:** No pricing information to set expectations

**Recommendation:** Add to services page:

- "Starting from €X,XXX" indicators
- Pricing tiers or packages
- "Free consultation" emphasis

---

## 7. Security & Compliance

### 7.1 Cookie Consent Implementation 🟠

**Issue:** Cookie banner saves consent but doesn't actually block analytics

**Location:** `components/ui/cookie-banner.tsx` + `app/[locale]/layout.tsx`

**Current Behavior:** Vercel Analytics loads regardless of consent status

**Recommendation:**

```tsx
// layout.tsx
const CookieAwareAnalytics = dynamic(
  () => import("@/components/analytics").then((mod) => mod.Analytics),
  { ssr: false }
);

// components/analytics.tsx
export function Analytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("corweb-cookie-consent");
    setHasConsent(consent === "accepted");
  }, []);

  if (!hasConsent) return null;
  return <VercelAnalytics />;
}
```

---

### 7.2 Rate Limiting 🟠

**Issue:** Contact API has no rate limiting - vulnerable to spam

**Location:** `app/api/contact/route.ts`

**Recommendation:** Add rate limiting:

```tsx
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 h"), // 5 requests per hour
});

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json(
      { success: false, error: "Too many requests" },
      { status: 429 }
    );
  }

  // ... rest of handler
}
```

---

### 7.3 CSRF Protection 🟢

**Issue:** Contact form lacks CSRF token validation

**Recommendation:** For a simple contact form, consider adding:

- Honeypot field for bot detection
- Server-side origin validation
- Optional: CSRF token implementation

---

## Priority Matrix

| Priority    | Category   | Item                                                  |
| ----------- | ---------- | ----------------------------------------------------- |
| 🔴 Critical | Code       | Fix `<a>` vs `Link` component usage (breaks i18n)     |
| 🟠 High     | SEO        | Add page-specific metadata to portfolio/privacy/legal |
| 🟠 High     | A11y       | Add skip-to-content link                              |
| 🟠 High     | A11y       | Add ARIA labels to icon buttons                       |
| 🟠 High     | UX         | Fix mobile nav auto-close                             |
| 🟠 High     | UX         | Add CTA to mobile navigation                          |
| 🟠 High     | Perf       | Remove duplicate motion library                       |
| 🟠 High     | Security   | Fix cookie consent to actually block analytics        |
| 🟡 Medium   | SEO        | Add canonical URLs                                    |
| 🟡 Medium   | SEO        | Enhance structured data                               |
| 🟡 Medium   | A11y       | Improve focus states                                  |
| 🟡 Medium   | A11y       | Link form errors with aria-describedby                |
| 🟡 Medium   | Code       | Extract duplicate nav constants                       |
| 🟡 Medium   | Code       | Remove unused dependencies                            |
| 🟡 Medium   | Security   | Add rate limiting to contact API                      |
| 🟢 Low      | UX         | Enhance footer with more links                        |
| 🟢 Low      | UX         | Add visual variety to badges                          |
| 🟢 Low      | Conversion | Add pricing indicators                                |

---

## Recommended Implementation Order

### Phase 1: Quick Wins (1-2 hours)

- [ ] Fix Link component usage across all pages
- [ ] Remove duplicate motion package
- [ ] Add missing metadata to pages

### Phase 2: Accessibility (2-3 hours)

- [ ] Add skip-to-content link
- [ ] Add custom focus states
- [ ] Add ARIA labels to all interactive elements
- [ ] Fix mobile nav auto-close

### Phase 3: SEO Enhancement (2-3 hours)

- [ ] Add canonical URLs to all pages
- [ ] Enhance structured data
- [ ] Add Twitter meta tags
- [ ] Improve internal linking

### Phase 4: Code Cleanup (2-3 hours)

- [ ] Extract shared navigation constants
- [ ] Create reusable PageHero component
- [ ] Remove unused dependencies
- [ ] Consolidate hardcoded values

### Phase 5: Conversion & Security (3-4 hours)

- [ ] Improve contact form UX
- [ ] Fix cookie consent implementation
- [ ] Add rate limiting
- [ ] Add trust signals

---

## Conclusion

Overall, Corweb has a well-structured, modern codebase with good foundational practices. The critical issue to address immediately is the incorrect Link component usage that breaks internationalization. After that, focusing on accessibility and SEO improvements will provide the most value for user experience and search visibility.

The site's design is clean and professional, befitting a software development agency. The "coming soon" portfolio approach is honest and appropriate for a new agency, though adding more trust signals would help conversions.
