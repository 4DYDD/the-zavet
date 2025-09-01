# Zavetoria Yearbook - SPA Design & Architecture Plan

## 📋 Project Overview

Website yearbook SPA untuk 22 alumni kelas Zavetoria MANPK Martapura dengan tema islami dan estetika biru-emas yang elegan.

---

## 🎨 SPA Structure & Sections

### **1. Hero Section**

- **Purpose**: Welcome, identity, dan makna "Zavetoria"
- **Elements**:
  - Logo/Title dengan typography Alexandria
  - Tagline "Laksana Kemenangan"
  - Background gradient islami dengan floating geometric shapes
  - CTA scroll indicator
- **Animation**: Fade in + parallax background

### **2. About Section**

- **Purpose**: Sejarah kelas dan konteks MANPK Martapura
- **Elements**:
  - Story timeline singkat
  - Nilai-nilai Muhammadiyah
  - Ornamental borders islami
- **Animation**: Reveal dari kiri-kanan

### **3. Vision & Mission Section**

- **Purpose**: Tujuan dan nilai-nilai kelas
- **Elements**:
  - Vision statement
  - Mission points
  - Islamic quotes/hadits
- **Animation**: Stagger reveal

### **4. Members Gallery**

- **Purpose**: Showcase 22 alumni dengan interactive cards
- **Elements**:
  - Grid responsive (1-2-3-4 columns)
  - Member cards dengan foto, nama, cita-cita
  - Filter/search functionality
  - Modal detail view
- **Animation**: Stagger cards, hover effects

### **5. Memories Timeline**

- **Purpose**: Perjalanan dan kenang-kenangan sekolah
- **Elements**:
  - Timeline vertical/horizontal
  - Memory cards dengan foto dan cerita
  - Progressive reveal
- **Animation**: Timeline drawing + card reveals

### **6. Achievements Section**

- **Purpose**: Prestasi kelas dan individual
- **Elements**:
  - Achievement cards
  - Statistics
  - Award icons
- **Animation**: Counter animations, card reveals

### **7. Photo Gallery**

- **Purpose**: Dokumentasi foto-foto kegiatan
- **Elements**:
  - Masonry/grid layout
  - Carousel modal
  - Category filters
- **Animation**: Lazy loading, smooth transitions

### **8. Messages Section**

- **Purpose**: Pesan dari guru, wali kelas, orang tua
- **Elements**:
  - Quote cards
  - Signature styles
  - Video messages (jika ada)
- **Animation**: Typewriter effect, card reveals

### **9. Contact & Social**

- **Purpose**: Info kontak dan social media
- **Elements**:
  - Contact cards
  - Social media links
  - Location map (jika perlu)
- **Animation**: Hover effects

### **10. Footer**

- **Purpose**: Closing statement dan credits
- **Elements**:
  - Islamic closing doa
  - Credits team
  - Traditional border patterns
- **Animation**: Gentle fade in

---

## 🏗️ Component Architecture

### **UI Components (components/ui/)**

#### **Button/**

```
├── index.tsx          # Main button component
├── variants.ts        # Primary, secondary, ghost variants
├── sizes.ts          # Small, medium, large sizes
└── animations.ts     # Hover and click animations
```

#### **Card/**

```
├── index.tsx          # Base card component
├── MemberCard.tsx     # Specialized member card
├── MemoryCard.tsx     # Timeline memory card
├── AchievementCard.tsx # Achievement display card
├── MessageCard.tsx    # Quote/message card
└── styles.ts         # Card styling variants
```

#### **Typography/**

```
├── index.tsx          # Base typography component
├── Heading.tsx        # Alexandria font headings
├── Body.tsx          # Harmattan body text
├── Quote.tsx         # Special quote styling
└── variants.ts       # Size and weight variants
```

#### **Modal/**

```
├── index.tsx          # Base modal component
├── MemberDetail.tsx   # Member profile modal
├── PhotoViewer.tsx    # Image gallery modal
├── VideoPlayer.tsx    # Video modal
└── animations.ts     # Modal animations
```

#### **Navigation/**

```
├── index.tsx          # Main navigation component
├── FloatingNav.tsx    # Floating section indicators
├── ScrollProgress.tsx # Scroll progress bar
├── BackToTop.tsx     # Back to top button
└── MobileMenu.tsx    # Mobile hamburger menu
```

### **Section Components (components/sections/)**

#### **HeroSection/**

```
├── index.tsx              # Main hero component
├── HeroContent.tsx        # Text content and CTA
├── FloatingElements.tsx   # Animated background shapes
├── ScrollIndicator.tsx    # Scroll down indicator
├── useHeroAnimations.ts   # Custom animation hooks
└── decorations.ts        # Geometric pattern configs
```

#### **MembersGallery/**

```
├── index.tsx              # Main gallery component
├── MemberGrid.tsx         # Grid layout component
├── MemberCard.tsx         # Individual member card
├── FilterBar.tsx          # Search and filter controls
├── MemberModal.tsx        # Detail view modal
├── useMemberFilter.ts     # Filter logic hook
├── useMemberModal.ts      # Modal state hook
└── animations.ts         # Grid and card animations
```

#### **MemoriesTimeline/**

```
├── index.tsx              # Main timeline component
├── TimelineTrack.tsx      # Timeline line/path
├── TimelineNode.tsx       # Timeline point markers
├── MemoryCard.tsx         # Memory content cards
├── useTimelineScroll.ts   # Scroll-based animations
└── timelineData.ts       # Memory data structure
```

### **Layout Components (components/layout/)**

#### **Container/**

```
├── index.tsx          # Responsive container
├── variants.ts        # Max-width variants
└── spacing.ts        # Padding configurations
```

#### **Grid/**

```
├── index.tsx          # Responsive grid system
├── GridItem.tsx       # Grid item wrapper
├── breakpoints.ts     # Responsive breakpoints
└── utilities.ts      # Grid utility functions
```

### **Feature Components (components/features/)**

#### **ImageCarousel/**

```
├── index.tsx          # Main carousel component
├── CarouselSlide.tsx  # Individual slide
├── CarouselDots.tsx   # Navigation dots
├── CarouselArrows.tsx # Navigation arrows
├── useCarousel.ts     # Carousel logic hook
└── animations.ts     # Slide transitions
```

#### **ScrollIndicator/**

```
├── index.tsx              # Scroll indicator component
├── ProgressBar.tsx        # Progress bar variant
├── SectionDots.tsx        # Section dot indicators
├── useScrollProgress.ts   # Scroll progress hook
└── useActiveSection.ts   # Active section detection
```

---

## 🎭 Animation System

### **Animation Hooks (hooks/)**

#### **useScrollAnimation.ts**

```typescript
// Intersection Observer based scroll animations
// Returns: isInView, animationControls, variants
```

#### **useParallax.ts**

```typescript
// Parallax scrolling effects
// Returns: transform values for different speeds
```

#### **useTypewriter.ts**

```typescript
// Typewriter text effect
// Returns: displayText, isComplete, restart function
```

#### **useIntersectionObserver.ts**

```typescript
// Generic intersection observer
// Returns: isIntersecting, entry
```

### **Animation Variants (lib/animations.ts)**

```typescript
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export const scaleOnHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

// Islamic-themed animations
export const floatingGeometry = {
  // Gentle floating movement for decorative elements
};
```

---

## 🎨 Asset & Decoration Strategy

### **Decorative Elements**

#### **Islamic Geometric Patterns**

- **Locations**: Section dividers, card borders, hero background
- **Colors**: Primary blue dengan opacity variations
- **Implementation**: SVG components dengan animated paths

#### **Ornamental Borders**

- **Locations**: Section headers, important content blocks
- **Style**: Traditional islamic calligraphy-inspired
- **Implementation**: CSS borders + SVG decorations

#### **Background Elements**

- **Hero**: Gradient + floating geometric shapes
- **Sections**: Subtle dot patterns, gradient overlays
- **Cards**: Decorative corner elements

### **Image Management**

```typescript
// Placeholder system (existing)
// Will be replaced with Google Drive images

interface ImagePlaceholder {
  width: number;
  height: number;
  color: string;
  text?: string;
}
```

---

## 📱 Responsive Design Strategy

### **Breakpoint System**

```typescript
export const breakpoints = {
  mobile: "320px-767px", // Single column, touch-first
  tablet: "768px-1023px", // 2-3 columns, hybrid interaction
  desktop: "1024px+", // Full layout, mouse interaction
} as const;
```

### **Layout Adaptations**

#### **Mobile (320px-767px)**

- **Navigation**: Hamburger menu + floating indicators
- **Sections**: Full-width stacked layout
- **Members**: Single column cards
- **Timeline**: Vertical layout
- **Gallery**: Single column masonry
- **Typography**: Larger base sizes (18px+)

#### **Tablet (768px-1023px)**

- **Navigation**: Horizontal nav + scroll indicators
- **Sections**: 2-column layouts where applicable
- **Members**: 2-3 column grid
- **Timeline**: Horizontal with vertical cards
- **Gallery**: 2-3 column masonry
- **Typography**: Medium sizes (16px base)

#### **Desktop (1024px+)**

- **Navigation**: Full horizontal nav + floating elements
- **Sections**: Multi-column complex layouts
- **Members**: 3-4 column grid dengan hover effects
- **Timeline**: Horizontal dengan advanced animations
- **Gallery**: 3-4 column masonry + hover previews
- **Typography**: Standard sizes (16px base)

---

## 📊 Data Structure

### **Member Data (data/members.ts)**

```typescript
interface Member {
  id: string;
  name: string;
  nickname?: string;
  photo: string;
  quote?: string;
  aspiration: string;
  achievement?: string[];
  socialMedia?: {
    instagram?: string;
    twitter?: string;
  };
}

export const members: Member[] = [
  // 22 alumni data
];
```

### **Memory Data (data/memories.ts)**

```typescript
interface Memory {
  id: string;
  title: string;
  description: string;
  date: string;
  photos: string[];
  category: "academic" | "social" | "religious" | "achievement";
}
```

### **Achievement Data (data/achievements.ts)**

```typescript
interface Achievement {
  id: string;
  title: string;
  description: string;
  type: "individual" | "class" | "school";
  recipients: string[]; // member IDs
  date: string;
  icon: string;
}
```

---

## 🚀 Implementation Strategy

### **Phase 1: Foundation Setup**

1. ✅ Create folder structure
2. ✅ Setup base components (Container, Grid, Typography)
3. ✅ Create animation system and hooks
4. ✅ Setup constants, types, and data structures

### **Phase 2: Core Sections**

1. ✅ HeroSection dengan floating animations
2. ✅ AboutSection dengan ornamental decorations
3. ✅ MembersGallery dengan interactive cards

### **Phase 3: Enhanced Features**

1. ✅ MemoriesTimeline dengan progressive animations
2. ✅ PhotoGallery dengan carousel modal
3. ✅ ScrollIndicator dan navigation
4. ✅ Mobile-first responsive optimizations

### **Phase 4: Polish & Performance**

1. ✅ Asset optimizations (lazy loading, WebP)
2. ✅ Final responsive adjustments
3. ✅ Performance testing dan optimizations
4. ✅ Cross-device testing

---

## 🎯 Design Principles

### **Islamic Aesthetics**

- **Colors**: Biru islami (#3A7CA5) + emas (#F4D06F)
- **Typography**: Clean, readable, respectful
- **Patterns**: Geometric, symmetrical, traditional
- **Layout**: Balanced, harmonious, purposeful

### **User Experience**

- **Loading**: Fast, progressive, meaningful
- **Navigation**: Intuitive, accessible, smooth
- **Interactions**: Purposeful, delightful, responsive
- **Content**: Organized, scannable, memorable

### **Performance**

- **Images**: Lazy loading, progressive, optimized
- **Animations**: Smooth 60fps, respectful motion
- **Code**: Clean, modular, maintainable
- **Build**: Optimized bundle, fast deployment

---

**Status**: Planning Complete ✅  
**Next Phase**: Foundation Setup Implementation  
**Priority**: High - Ready for development  
**Timeline**: Estimated 2-3 development sessions

---

_Zavetoria - Laksana Kemenangan_  
_Website yearbook alumni MANPK Martapura_
