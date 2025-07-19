import Image from "next/image";
import { Step, Steps } from "fumadocs-ui/components/steps";

const Journey = () => {
  return (
    <div
      lang="th"
      className="flex flex-col gap-4 border-x border-t p-8 md:px-12"
    >
      <div className="text-start">
        <p
          lang="en"
          className="px-2 py-1 text-sm font-mono bg-fd-primary text-fd-primary-foreground font-bold w-fit mb-4"
        >
          Designed with Love
        </p>
        <h2 className="text-3xl font-semibold mb-4">เส้นทางมหาเปรียญฯ</h2>
        <p className="text-fd-muted-foreground font-semibold mb-6">
          การศึกษาเปรียญธรรมเป็นการเรียนบาลีเพื่อทำความเข้าใจพระธรรมวินัย
          โดยแบ่งเป็น ๙ ประโยค เปรียญตรี โท เอก
          เป็นการจัดกลุ่มประโยคเพื่อความสะดวกในการเรียก
          โดยแต่ละกลุ่มจะมีการเรียนเนื้อหาที่แตกต่างกันไป ดังนี้ ฯ
        </p>
      </div>

      <div className="md:flex-row flex flex-col gap-4">
        <div className="mb-5">
          <Steps>
            <Step>
              <div className="">
                <h2 className="text-lg font-semibold">เปรียญตรี</h2>
                <p className="py-2 text-fd-muted-foreground font-semibold leading-relaxed">
                  เปรียญธรรม ๑-๒ ประโยค และเปรียญธรรม ๓ ประโยค
                  <br />
                  เป็นระดับพื้นฐานของการศึกษาบาลี
                  เนื้อหาที่เรียนจะเน้นไปที่การปูพื้นฐานไวยากรณ์บาลี
                  และการแปลธรรมบทเบื้องต้น
                  <br />
                  <span className="text-foreground">ตำราเรียน: </span>{" "}
                  อักขรวิธี, วจีวิภาค, วากยสัมพันธ์ และธรรมบท ภาค ๑-๔
                </p>
              </div>
            </Step>

            <Step>
              <div className="">
                <h2 className="text-lg font-semibold">เปรียญโท</h2>
                <p className="py-2 leading-relaxed text-fd-muted-foreground font-semibold">
                  เปรียญธรรม ๔, ๕ และ ๖ ประโยค
                  <br />
                  เป็นระดับกลางของการศึกษาบาลี
                  ผู้เรียนในระดับนี้จะมีความสามารถในการแปลบาลีได้ดีขึ้น
                  และเริ่มแปลคัมภีร์อรรถกถา รวมถึงศึกษาพระวินัยปิฎกอย่างลึกซึ้ง{" "}
                  <br />
                  <span className="text-foreground">ตำราเรียน: </span>
                  ธรรมบท ภาค ๕-๘, มังคลัตถทีปนี, สมันตปสาทิกา
                </p>
              </div>
            </Step>
            <Step>
              <div className="">
                <h2 className="text-lg font-semibold">เปรียญเอก</h2>
                <p className="py-2 leading-relaxed text-fd-muted-foreground font-semibold">
                  เปรียญธรรม ๗, ๘ และ ๙ ประโยค
                  <br />
                  เป็นระดับสูงสุดของการศึกษาบาลีในประเทศไทย
                  ผู้ที่สอบผ่านในระดับนี้จะมีความรู้ความเชี่ยวชาญในพระไตรปิฎกอย่างแตกฉาน
                  และมีความสามารถในการค้นคว้าวิจัยพระธรรมวินัย
                  <br />
                  <span className="text-foreground">ตำราเรียน: </span>{" "}
                  สมันตปสาทิกา, ปกรวิเสสวิสุทธิมรรค, อภิธัมมัตถสังคหะ,
                  ฉันทลักษณะ และแต่งไทย
                </p>
              </div>
            </Step>
          </Steps>
        </div>
        <div className="h-full m-auto">
          <Image src="/hero-image.webp" alt="image" width={800} height={800} />
        </div>
      </div>
    </div>
  );
};

export default Journey;
