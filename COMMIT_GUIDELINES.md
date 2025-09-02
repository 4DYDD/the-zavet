# 📋 Commit Guidelines - Zavetoria Yearbook Project

## 🚀 Pre-Commit Checklist

Ikuti langkah-langkah ini SETIAP KALI sebelum commit untuk memastikan project quality dan consistency.

---

## **Step 1: Build & Runtime Verification** 🔧

### **1.1 Test Build Process**

```bash
npm run build
```

**Expected Result**: ✅ Compiled successfully tanpa errors atau warnings

### **1.2 Test Production Server**

```bash
npm run start
```

**Expected Result**: ✅ Ready in <2 seconds, dapat diakses di localhost:3000

### **1.3 Cross-Device Testing** 📱

- **Desktop**: http://localhost:3000 ✅
- **Mobile**: http://[YOUR_IP]:3000 ✅
- **Verify**: Semua sections loading properly

---

## **Step 2: Log Consolidation** 📝

### **2.1 Identify Same-Date Logs**

Cari semua file log dengan tanggal yang sama:

```
logs/LOG_TYPE_YYYY-MM-DD_HH-MM.md
```

### **2.2 Merge Process**

1. **Buat master log** dengan format: `COMPLETE_DEVELOPMENT_LOG_YYYY-MM-DD.md`
2. **Gabungkan semua session** dalam chronological order
3. **Include semua technical details** dari each session
4. **Maintain timestamp** untuk setiap major change
5. **Delete individual logs** setelah merge

### **2.3 Master Log Structure**

```markdown
# COMPLETE_DEVELOPMENT_LOG_YYYY-MM-DD

## Session Overview

**Date**: Full date
**Total Sessions**: Number of merged sessions
**Focus Areas**: Main development areas

## Session 1: [TIME] - [TITLE]

[Content from first session]

## Session 2: [TIME] - [TITLE]

[Content from second session]

## Final Status & Summary

[Overall day achievements]

## Next Phase Planning

[What's next for development]
```

---

## **Step 3: Commit Message Generation** 💬

### **3.1 Commit Message Format - Bilingual Standard**

**Format: English Section + Indonesian Section**

```
[TYPE]: [BRIEF_ENGLISH_DESCRIPTION]

**🎯 [PRIMARY_FOCUS_EN]**
- [Key achievement 1]
- [Key achievement 2]
- [Key achievement 3]

**🏗️ [ARCHITECTURE_CHANGES_EN]**
- [Structural changes]
- [New components/folders created]
- [Dependencies updates]

**🎨 [DESIGN_SYSTEM_EN]**
- [CSS/styling improvements]
- [Theme updates]
- [Animation enhancements]

**🌐 [PERFORMANCE_EN]**
- [SSR optimizations]
- [Bundle size improvements]
- [Build process enhancements]

**� [IMPLEMENTATION_FILES_EN]**
- app/sections/[Section]/index.tsx ([description])
- app/[other files] ([purpose])
- types/[interfaces] ([data structures])

**🧹 [CODE_QUALITY_EN]**
- [Refactoring done]
- [Dependencies cleaned]
- [Import fixes]

**📋 [WORKFLOW_STANDARDS_EN]**
- [Documentation added]
- [Guidelines established]
- [Quality procedures]

**✅ [VERIFICATION_RESULTS_EN]**
- Build: ✅ [time]ms compilation successful
- Runtime: ✅ Production server ready in [time]ms
- Type Safety: ✅ No TypeScript errors
- Performance: ✅ [metrics]
- Structure: ✅ [organization status]

**Impact**: [Brief impact description in English]

**Next**: [Immediate next steps in English]

---

**[TYPE]: [DESKRIPSI_SINGKAT_BAHASA_INDONESIA]**

**🎯 [FOKUS_UTAMA_ID]**
- [Pencapaian kunci 1]
- [Pencapaian kunci 2]
- [Pencapaian kunci 3]

**🏗️ [PERUBAHAN_ARSITEKTUR_ID]**
- [Perubahan struktural]
- [Komponen/folder baru dibuat]
- [Update dependensi]

**🎨 [SISTEM_DESAIN_ID]**
- [Perbaikan CSS/styling]
- [Update tema]
- [Peningkatan animasi]

**🌐 [PERFORMA_ID]**
- [Optimasi SSR]
- [Perbaikan ukuran bundle]
- [Peningkatan proses build]

**📱 [FILE_IMPLEMENTASI_ID]**
- app/sections/[Section]/index.tsx ([deskripsi])
- app/[file lain] ([tujuan])
- types/[interface] ([struktur data])

**🧹 [KUALITAS_KODE_ID]**
- [Refactoring yang dilakukan]
- [Dependensi dibersihkan]
- [Perbaikan import]

**📋 [STANDAR_WORKFLOW_ID]**
- [Dokumentasi ditambahkan]
- [Pedoman ditetapkan]
- [Prosedur kualitas]

**✅ [HASIL_VERIFIKASI_ID]**
- Build: ✅ Kompilasi [time]ms sukses
- Runtime: ✅ Server produksi siap dalam [time]ms
- Type Safety: ✅ Tidak ada error TypeScript
- Performance: ✅ [metrik]
- Structure: ✅ [status organisasi]

**Dampak**: [Deskripsi dampak singkat dalam bahasa Indonesia]

**Selanjutnya**: [Langkah selanjutnya dalam bahasa Indonesia]
```

### **3.2 Bilingual Commit Example**

```
feat: Complete yearbook foundation with 5-section architecture and workflow standards

**🏗️ SECTION ARCHITECTURE**
- Complete 5-section SPA structure (Hero/Sejarah/Members/Memories/Prayer)
- Modular app/sections/ folder organization with component isolation
- Mobile-first responsive design implementation
- TypeScript interfaces and type safety throughout

**🎨 DESIGN SYSTEM OPTIMIZATION**
- CSS variables naming simplified: --color-bg-main → --main format
- Alexandria + Harmattan fonts with proper font-family variables
- Pink tertiary accent (#F7A1C4) integration per client request
- Consistent Tailwind className backtick format implementation

**Impact**: Solid foundation established for Zavetoria yearbook with scalable architecture and performance optimization.

**Next**: Ready for detailed HeroSection implementation with floating animations.

---

**feat: Fondasi lengkap yearbook dengan arsitektur 5-section dan standar workflow**

**🏗️ ARSITEKTUR SECTION**
- Struktur SPA 5-section lengkap (Hero/Sejarah/Members/Memories/Prayer)
- Organisasi folder app/sections/ modular dengan isolasi komponen
- Implementasi desain responsif mobile-first
- Interface TypeScript dan type safety menyeluruh

**🎨 OPTIMASI SISTEM DESAIN**
- Penyederhanaan penamaan CSS variables: format --color-bg-main → --main
- Font Alexandria + Harmattan dengan variabel font-family proper
- Integrasi aksen pink tersier (#F7A1C4) sesuai permintaan klien
- Implementasi format className Tailwind backtick konsisten

**Dampak**: Fondasi solid terbentuk untuk yearbook Zavetoria dengan arsitektur scalable dan optimasi performa.

**Selanjutnya**: Siap untuk implementasi detail HeroSection dengan animasi floating.
```

### **3.3 Commit Types & Usage**

- **feat**: New feature implementation
- **fix**: Bug fixes and corrections
- **refactor**: Code structure improvements
- **style**: UI/UX and design updates
- **docs**: Documentation updates
- **build**: Build system changes
- **arch**: Architecture and folder structure

---

## **Step 4: Final Checks** ✅

### **4.1 File Organization**

- [ ] Logs consolidated for the date
- [ ] No duplicate log files
- [ ] All new components in proper folders
- [ ] Import paths working correctly

### **4.2 Code Quality**

- [ ] TypeScript compilation successful
- [ ] ESLint passes without errors
- [ ] CSS variables used (no hardcoded colors)
- [ ] className format consistent (backticks)

### **4.3 Performance**

- [ ] Build size reasonable
- [ ] No memory leaks
- [ ] Fast startup time
- [ ] Mobile responsiveness verified

### **4.4 Documentation**

- [ ] Changes documented in consolidated log
- [ ] Technical decisions explained
- [ ] Next steps clearly outlined

---

## **Step 5: Ready to Commit** 🎉

### **5.1 Copy Commit Message**

Gunakan commit message yang sudah generated (plain text, easy copy)

### **5.2 Manual Git Commands**

```bash
git add .
git commit -m "[PASTE_COMMIT_MESSAGE_HERE]"
git push origin main
```

### **5.3 Deployment Ready**

Project siap untuk deploy ke Vercel tanpa issues

---

## 🎯 **Quality Standards**

### **Never Commit If:**

- ❌ Build fails
- ❌ Runtime errors exist
- ❌ Mobile layout broken
- ❌ Logs not consolidated
- ❌ Import errors present

### **Always Ensure:**

- ✅ Clean build process
- ✅ Fast startup time
- ✅ Responsive design working
- ✅ Documentation complete
- ✅ Performance optimized

---

## 📚 **Reference Quick Links**

- **Build Command**: `npm run build`
- **Start Command**: `npm run start`
- **Log Directory**: `logs/`
- **Component Structure**: `app/sections/[Name]/`
- **CSS Variables**: `app/globals.css`

---

**Last Updated**: September 2, 2025  
**Version**: 1.0  
**Purpose**: Ensure consistent, high-quality commits for Zavetoria Yearbook project

---

_"Quality first, speed second. Every commit should be deployable."_
