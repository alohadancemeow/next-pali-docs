# next-pali-docs

📖 Pali Docs is a documentation site for Pali language.

> **"การเรียนรู้ไม่ควรถูกจำกัดด้วยตำรา แต่ควรเปิดกว้างด้วยเทคโนโลยี"**

ในปัจจุบัน การเรียนรู้ภาษาบาลียังคงพึ่งพาตำราและหนังสือเรียนเป็นหลัก ซึ่งแม้จะเต็มเปี่ยมไปด้วยคุณค่าทางวิชาการที่ล้ำค่า แต่ก็มาพร้อมกับข้อจำกัดหลายประการ ไม่ว่าจะเป็นความไม่สะดวกในการพกพา การค้นหาข้อมูลเฉพาะจากเอกสารที่มีปริมาณมหาศาลซึ่งต้องใช้เวลาและความพยายามอย่างมาก แม้จะมีการแปลงเนื้อหาเป็นไฟล์ดิจิทัลอย่าง PDF แล้วก็ตาม แต่ปัญหาในการสืบค้นก็ยังคงเป็นอุปสรรคสำคัญสำหรับผู้ศึกษาจำนวนไม่น้อย

ในยุคที่เทคโนโลยีเข้ามาเปลี่ยนวิถีชีวิต การนำเสนอเนื้อหาการเรียนภาษาบาลีในรูปแบบดิจิทัล จึงเป็นคำตอบที่ทันสมัยและตอบโจทย์ความต้องการของผู้เรียนในปัจจุบัน โปรเจกต์ **"Palidocs"** จึงมีขึ้นเพื่อเป็นสะพานเชื่อมระหว่างองค์ความรู้ดั้งเดิมกับนวัตกรรมใหม่ๆ โดยมีเป้าหมายหลักในการสร้างแพลตฟอร์มการเรียนบาลีไวยากรณ์ออนไลน์ที่ใช้งานง่าย สะดวกต่อการทบทวนและสืบค้นข้อมูล เพื่อให้ผู้เรียนสามารถเข้าถึงการศึกษาได้อย่างไร้ขีดจำกัดด้านเวลาและสถานที่.

โดยมีเนื้อหาหลักดังนี้:
- อักขรวิธี
- วจีวิภาค
- วากยสัมพันธ์
- ฉันทลักษณะ

---

This is a Next.js application generated with
[Create Fumadocs](https://github.com/fuma-nama/fumadocs).

Run development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Explore

In the project, you can see:

- `lib/source.ts`: Code for content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `app/layout.config.tsx`: Shared options for layouts, optional but preferred to keep.

| Route                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | The route group for your landing page and other pages. |
| `app/docs`                | The documentation layout and pages.                    |
| `app/api/search/route.ts` | The Route Handler for search.                          |

### Fumadocs MDX

A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.vercel.app) - learn about Fumadocs
