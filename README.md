# 📖 Pali Docs - A documentation site for Pali language

> **"การเรียนรู้ไม่ควรถูกจำกัดด้วยตำรา แต่ควรเปิดกว้างด้วยเทคโนโลยี"**

ในปัจจุบัน การเรียนรู้ภาษาบาลียังคงพึ่งพาตำราและหนังสือเรียนเป็นหลัก ซึ่งแม้จะเต็มเปี่ยมไปด้วยคุณค่าทางวิชาการที่ล้ำค่า แต่ก็มาพร้อมกับข้อจำกัดหลายประการ ไม่ว่าจะเป็นความไม่สะดวกในการพกพา การค้นหาข้อมูลเฉพาะจากเอกสารที่มีปริมาณมหาศาลซึ่งต้องใช้เวลาและความพยายามอย่างมาก แม้จะมีการแปลงเนื้อหาเป็นไฟล์ดิจิทัลอย่าง PDF แล้วก็ตาม แต่ปัญหาในการสืบค้นก็ยังคงเป็นอุปสรรคสำคัญสำหรับผู้ศึกษาจำนวนไม่น้อย

ในยุคที่เทคโนโลยีเข้ามาเปลี่ยนวิถีชีวิต การนำเสนอเนื้อหาการเรียนภาษาบาลีในรูปแบบดิจิทัล จึงเป็นคำตอบที่ทันสมัยและตอบโจทย์ความต้องการของผู้เรียนในปัจจุบัน โปรเจกต์ **"Palidocs"** จึงมีขึ้นเพื่อเป็นสะพานเชื่อมระหว่างองค์ความรู้ดั้งเดิมกับนวัตกรรมใหม่ๆ โดยมีเป้าหมายหลักในการสร้างแพลตฟอร์มการเรียนบาลีไวยากรณ์ออนไลน์ที่ใช้งานง่าย สะดวกต่อการทบทวนและสืบค้นข้อมูล เพื่อให้ผู้เรียนสามารถเข้าถึงการศึกษาได้อย่างไร้ขีดจำกัดด้านเวลาและสถานที่.

#### 📌 เนื้อหาครอบคลุมบาลีไวยากรณ์ ๔ ภาค ดังนี้:
- **อักขรวิธี** - ว่าด้วยอักษร จัดเป็น ๒ คือ สมัญญาภิธาน ๑ สนธิ ๑.
- **วจีวิภาค** - แบ่งคำพูดออกเป็น ๖ ส่วน คือ นาม ๑ อัพยยศัพท์ ๑ สมาส ๑ ตัทธิต ๑ อาขยาต ๑ กฤต ๑.
- **วากยสัมพันธ์** - ว่าด้วยการก และประพันธ์ผูกคำพูดที่แบ่งไว้ในวจีวิภาคให้เข้าเป็นประโยคอันเดียวกัน.
- **ฉันทลักษณะ** - แสดงวิธีแต่งฉันท์ คือคาถาที่เป็นวรรณพฤทธิ์และมาตราพฤทธิ์.

#### ✨ วัตถุประสงค์:

* **เรียนภาษาบาลีได้ทุกที่ทุกเวลา:** <br/>
  บอกลาหนังสือเรียนเล่มหนา! เข้าถึงบทเรียนภาษาบาลีที่ครบถ้วนได้จากทุกอุปกรณ์ ไม่ว่าจะบนมือถือระหว่างพักกลางวันหรือบนแล็ปท็อปตอนดึก ๆ
* **หลักสูตรที่สมบูรณ์และค้นหาได้ง่าย:** <br/>
  ตั้งแต่ **ไวยากรณ์** พื้นฐาน **วากยสัมพันธ์** ไปจนถึง **ฉันทลักษณ์** มีครบทุกอย่างในรูปแบบที่จัดระเบียบอย่างสวยงามและค้นหาได้ง่าย
* **ค้นหาได้เร็วปานสายฟ้าแลบ:** <br/>
  ขับเคลื่อนด้วย Algolia ค้นหาสิ่งที่คุณต้องการได้ในเสี้ยววินาที ไม่ต้องพลิกหน้ากระดาษเป็นร้อย ๆ อีกต่อไป

## The Vision

We believe learning shouldn't be limited by textbooks but should be opened up through technology. Pali Docs bridges the gap between traditional scholarship and modern innovation, making ancient wisdom accessible to everyone, everywhere.


#### 🎯 Perfect For:

- **Students** diving into Pali studies
- **Scholars** needing quick reference materials
- **Anyone curious** about this beautiful ancient language
- **Self-learners** who prefer flexible, on-demand education

#### ✨ Objective:

* **Learn Pali Anywhere, Anytime:** Access comprehensive Pali lessons from any device. Ditch the heavy textbooks and study on your phone or laptop whenever you want.
* **Complete & Searchable Curriculum:** From **grammar** to **sentence structure** and **prosody**, we've got you covered. Find exactly what you need in a beautifully organized, searchable format.
* **Lightning-Fast Search:** Find what you're looking for in milliseconds with our Algolia-powered search. No more flipping through hundreds of pages.


## 🖼️ Screenshot:

![screenshot](/public/Screenshot.png)

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
