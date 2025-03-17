import { CardData } from "../types";

const TotalsSummary = ({ cardData }: { cardData: CardData[] }) => {
    return (
        <div className="totals-summary">
            <div className="row row-cols-1 row-cols-md-3 g-3">
                {cardData.map((card, index) => (
                    <div className="col" key={index}>
                        <div className="card h-100">
                            <div className="card-body text-start">
                                <img src={card.image} alt={card.label} className="card-img-top mx-auto mb-3"/>
                                <div className="mt-2">{card.label}</div>
                                <p className="card-text">
                                    {card.isCurrency
                                        ? `R$ ${Number(card.value).toLocaleString('pt-BR', {
                                            minimumFractionDigits: 2,
                                        })}`
                                        : card.value}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TotalsSummary;