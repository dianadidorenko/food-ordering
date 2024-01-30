import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={"Out story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas
            ducimus commodi labore veritatis vero dolore cum expedita veniam
            suscipit error exercitationem, illo facilis esse! Eligendi a vitae
            officia nemo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsum
            earum nulla, maiores aspernatur quibusdam similique perferendis sunt
            atque ipsa?
          </p>
          <p>
            Consectetur adipisicing elit. Harum ipsum earum nulla, maiores
            aspernatur quibusdam similique perferendis sunt atque ipsa?
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            href="tel:+380974379424"
            className="text-4xl underline text-gray-500"
          >
            +3(097)437-94-24
          </a>
        </div>
      </section>
    </>
  );
}
