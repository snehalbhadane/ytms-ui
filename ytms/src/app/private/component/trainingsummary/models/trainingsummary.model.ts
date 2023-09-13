export class trainingSummary {
    trainingSummaryId: number;
    trainingPlan: string;
    trainer: string;
    trainingPattern: string;
    duration: number;
    createdOn: number;

    constructor(trainingSummaryId?: number, trainingPlan?: string, trainer?: string, trainingPattern?: string,
        duration?: number, createdOn?: number) {
        this.trainingSummaryId = trainingSummaryId || 0;
        this.trainingPlan = trainingPlan || '';
        this.trainer = trainer || '';
        this.trainingPattern = trainingPattern || '';
        this.duration = duration || 0;
        this.createdOn = createdOn || 0;
    }
}