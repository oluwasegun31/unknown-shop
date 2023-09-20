import classes from "./Loading.module.css";

export default function Loading() {
  return (
    <section className="fixed top-[68px] left-0 w-full h-[90vh] bg-[#f7f7f7] flex justify-center items-center z-30">
      <div className={classes.pulse}></div>
    </section>
  );
}
