import styles from "./card.module.scss";
import { _classes } from "@/utils/helpers";
import { Image } from "@/widgets";
import { useModal } from "@/providers";
import { Button, RequestForm } from "@/components";

const cl = _classes(styles);

Card.propTypes = {
  dozer: PropTypes.object,
};

Card.defaultProps = {};

export default function Card({ dozer }) {
  const { openModal } = useModal();

  const toggleRequestModal = () => {
    openModal(
      <RequestForm
        dozerMake={dozer.make}
        dozerModel={dozer.model}
        dozerEngineName={dozer.engineName}
      />
    );
  };

  return (
    <div className={cl(["_", "box"])}>
      <div className={cl("image")}>
        <Image
          src={dozer.thumbnailImageUrl}
          alt={dozer.engineName}
          size="contain"
        />
      </div>
      <div className={cl("details")}>
        <h2 className="title">
          {dozer.make} - {dozer.model}
        </h2>
        <h3 className="subtitle">{dozer.engineName}</h3>

        <p>
          Engine: {dozer.engineHorsepower}hp / {dozer.engineKilowatts}kw
        </p>
        <p>
          Weight: {dozer.weightPounds}lbs / {dozer.weightKilos}kg
        </p>
      </div>
      <div className={cl("details_2")}>
        <span className="tag is-dark">{dozer.category}</span>
        <Button onClick={toggleRequestModal} text="Request Info" />
      </div>
    </div>
  );
}
