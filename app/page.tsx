import { headerLinks } from "@/data/config";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full items-center justify-center">
      <figure className="absolute w-full top-0 -z-10 brightness-50">
        <img
          className="hidden md:block max-h-screen h-screen object-cover"
          src="/images/landing.jpg"
        />
      </figure>
      <section className="flex flex-wrap justify-center items-center gap-16 w-full justify-items-center p-2">
        <div className="card w-96 glass">
          <figure className="h-[250px]">
            <img
              className="object-cover"
              src="https://www.vipathenstransfer.com/wp-content/uploads/2016/08/transfer.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Private transfers</h2>
            <p>
              Exclusive chauffeur-driven luxury vans for discreet and secure VIP
              transportation in Greece.
            </p>
            <div className="card-actions justify-end">
              <a href={headerLinks[1].path} className="btn btn-primary">
                Book now!
              </a>
            </div>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure className="h-[250px]">
            <img
              className="object-cover"
              src="https://s3-eu-west-1.amazonaws.com/jet2blog/production/POI-ATH_Athens_Acropolis_Parthenon_104353716_Getty.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Private Tours</h2>
            <p>
              Curated private tours with expert guides, exploring Greece&apos;s
              beauty in style and comfort.
            </p>
            <div className="card-actions justify-end">
              <a href={headerLinks[2].path} className="btn btn-primary">
                Explore tours!
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
