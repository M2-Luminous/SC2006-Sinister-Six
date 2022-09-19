package com.tonasolution.com;

import java.util.Arrays;
import java.util.List;
import java.util.function.Function;

public class PredictPrice implements Function<Double[], Double> {
    private final double[] thetaVector;

    public PredictPrice(double[] thetaVector) {
        this.thetaVector = Arrays.copyOf(thetaVector, thetaVector.length);
    }

    @Override
    public Double apply(Double[] featureVector) {

        assert featureVector[0] == 1.0;

        double prediction = 0;

        for(int j = 0; j < thetaVector.length; j++) {
            prediction += thetaVector[j] * featureVector[j];
        }

        return prediction;
    }

    public double[] getThetas() {
        return Arrays.copyOf(thetaVector, thetaVector.length);
    }

    public static double cost(
            Function<Double[], Double> target,
            List<Double[]> dataset,
            List<Double> labels
    ) {
        int m = dataset.size();
        double sumSquaredErrors = 0;

        for (int i = 0; i < m; i++){
            Double[] featureVector = dataset.get(i);
            double predicted = target.apply(featureVector);
            double label = labels.get(i);
            double gap = predicted - label;
            sumSquaredErrors += Math.pow(gap, 2);
        }

        return (1.0 / (2 * m)) * sumSquaredErrors;
    }

}
