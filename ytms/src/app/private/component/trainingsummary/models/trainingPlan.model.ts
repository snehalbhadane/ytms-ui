export class trainingPlan {
    trainingPlanId: number;
    trainingName: string;
    topic: string;
    contentsCoverage: string;
    extraTopicCoverage: string;
    duration: number;
    plannedStartDate: number;
    plannedEndDate: number;
    actualStartDate: number;
    actualEndDate: number;
    status: string;
    remark: string;
    user: string;
    trainer: string;

    constructor(trainingPlanId?: number, trainingName?: string, topic?: string, contentsCoverage?: string, extraTopicCoverage?: string,
        duration?: number, plannedStartDate?: number, plannedEndDate?: number, actualStartDate?: number, actualEndDate?: number,
        status?: string, remark?: string, user?: string, trainer?: string) {

        this.trainingPlanId = trainingPlanId || 0;
        this.trainingName = trainingName || '';
        this.topic = topic || '';
        this.contentsCoverage = contentsCoverage || '';
        this.extraTopicCoverage = extraTopicCoverage || '';
        this.duration = duration || 0;
        this.plannedStartDate = plannedStartDate || 0;
        this.plannedEndDate = plannedEndDate || 0;
        this.actualStartDate = actualStartDate || 0;
        this.actualEndDate = actualEndDate || 0;
        this.status = status || '';
        this.remark = remark || '';
        this.user = user || '';
        this.trainer = trainer || '';
    }
}